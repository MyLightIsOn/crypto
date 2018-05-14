import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';


@Injectable()
export class CryptoService {
    public myArray = [];
    
    constructor(private http: HttpClient){}
    getCrypto() {
        return this.http.get('https://api.binance.com/api/v3/ticker/price');
    }

    getBTCValue(crypto){
        for (var coin of crypto) {
            console.log('-------------------------');
            console.log('Coin: ' + coin['symbol']);
            console.log('Price: ' + coin['price']);
        }
    }
}

