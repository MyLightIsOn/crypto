import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';


@Injectable()
export class CryptoService {
    public bitcoin;
    public coinArray = [];
    public lookup = {};
    public total = 0;
    private cryptoList = [
        {symbol:'TRX', amount: 4809.611},
        {symbol:'IOST', amount: 3626.37},
        {symbol:'XVG', amount: 2064.611},
        {symbol:'POE', amount: 1798.20},
        {symbol:'CND', amount: 999},
        {symbol:'TNB', amount: 999},
        {symbol:'ADA', amount: 299.7},
        {symbol:'XRP', amount: 161.838},
        {symbol:'IOTA', amount: 46.953},
        {symbol:'LTC', amount: 1.59840},
        {symbol:'BCX', amount: 999},
        {symbol: 'BTC', amount: 0.00017156}
    ];
    
    constructor(private http: HttpClient){}

    getCrypto() {
        return this.http.get('https://api.binance.com/api/v3/ticker/price');
    }

    matchCoins(crypto){
        
        for (let coin in this.cryptoList) {
            if(this.cryptoList[coin]['symbol'].slice(0, 3) === 'BTC'){
                this.lookup[this.cryptoList[coin]['symbol'] + 'USDT'] = this.cryptoList[coin]['symbol'];
            } else {
                this.lookup[this.cryptoList[coin]['symbol'] + 'BTC'] = this.cryptoList[coin]['symbol'];
            }
        }

        for (let i in crypto) {
            if (typeof this.lookup[crypto[i]['symbol']] !== 'undefined') {
                this.coinArray.push(crypto[i]);
            }
        }
        this.caclulateValue();
        return this.coinArray;
    }
    
    caclulateValue(){
        for (let i in this.coinArray) {
            for(let coin in this.cryptoList) {
                if (this.coinArray[i]['symbol'] === this.cryptoList[coin]['symbol'] + 'BTC') {
                    this.coinArray[i]['btc_value'] = this.coinArray[i]['price'] * this.cryptoList[coin]['amount'];
                    this.coinArray[i]['usd_value'] = (this.coinArray[i]['btc_value'] * this.bitcoin['price']).toFixed(2);
                }

                if (this.coinArray[i]['symbol'] === this.cryptoList[coin]['symbol'] + 'USDT') {
                    this.coinArray[i]['btc_value'] = this.cryptoList[coin]['amount'];
                    this.coinArray[i]['usd_value'] = (this.coinArray[i]['btc_value'] * this.bitcoin['price']).toFixed(2);
                }
            }
            this.total = this.total + parseFloat(this.coinArray[i]['usd_value']);
        }
        this.total = Math.round( this.total * 1e2 ) / 1e2;
        console.log('total: ' + this.total);
        console.log(this.coinArray);
    }
    

     getBTCValue(crypto){
         for (let coin of crypto) {
             if(coin['symbol'] === 'BTCUSDT'){
                 this.bitcoin = coin;
             }
         }

         return this.matchCoins(crypto)
     }
}

