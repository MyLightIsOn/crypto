import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';


@Injectable()
export class CryptoService {
    public myArray = [];
    public bitcoin;
    
    constructor(private http: HttpClient){}
    getBTC() {
        return this.http.get('https://api.binance.com/api/v3/ticker/price?sumbole=BTCUSDT')
            .map(res => { this.bitcoin = res });
    }

    getCrypto() {
        return this.http.get('https://api.binance.com/api/v3/ticker/price');
    }

    getCryptoValue(crypto){
        const coinArray = [];
        for (let coin of crypto) {

            if(coin['symbol'] === 'TRXBTC'){
                coin['btc_value'] = coin['price'] * 4809.611;
                coin['usd_value'] = (coin['btc_value'] * this.bitcoin['price']).toFixed(2);
                coinArray.push(coin)
            }
        }

        console.log(this.bitcoin);
        console.log(coinArray);
        return coinArray;
    }

     getBTCValue(crypto){
         for (let coin of crypto) {
             if(coin['symbol'] === 'BTCUSDT'){
                 this.bitcoin = coin;
             }
         }

         return this.getCryptoValue(crypto)
     }
}

