"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
var CryptoService = /** @class */ (function () {
    function CryptoService(http) {
        this.http = http;
        this.myArray = [];
        this.coinList = ['TRX', 'IOST', 'XVG', 'POE', 'CND', 'TNB', 'ADA', 'XRP', 'IOTA', 'LTC', 'BCX'];
    }
    CryptoService.prototype.getBTC = function () {
        var _this = this;
        return this.http.get('https://api.binance.com/api/v3/ticker/price?sumbole=BTCUSDT')
            .map(function (res) { _this.bitcoin = res; });
    };
    CryptoService.prototype.getCrypto = function () {
        return this.http.get('https://api.binance.com/api/v3/ticker/price');
    };
    CryptoService.prototype.getCryptoValue = function (crypto) {
        var coinArray = [];
        var lookup = {};
        for (var coin in this.coinList) {
            lookup[this.coinList[coin] + 'BTC'] = this.coinList[coin];
        }
        /*console.log(lookup)*/ ;
        for (var i in crypto) {
            if (typeof lookup[crypto[i]['symbol']] !== 'undefined') {
                coinArray.push(crypto[i]);
            }
        }
        /*for (let coin of crypto) {
            if(coin['symbol'] === 'TRXBTC'){
                coin['btc_value'] = coin['price'] * 4809.611;
                coin['usd_value'] = (coin['btc_value'] * this.bitcoin['price']).toFixed(2);
                coinArray.push(coin)
            }
        }*/
        /*console.log(this.bitcoin);
        console.log(coinArray);*/
        return coinArray;
    };
    CryptoService.prototype.getBTCValue = function (crypto) {
        for (var _i = 0, crypto_1 = crypto; _i < crypto_1.length; _i++) {
            var coin = crypto_1[_i];
            if (coin['symbol'] === 'BTCUSDT') {
                this.bitcoin = coin;
            }
        }
        return this.getCryptoValue(crypto);
    };
    CryptoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CryptoService);
    return CryptoService;
}());
exports.CryptoService = CryptoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcnlwdG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6Qyw2Q0FBa0Q7QUFFbEQsaUNBQStCO0FBQy9CLG1DQUFpQztBQUlqQztJQUtJLHVCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSjdCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFWixhQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkQsQ0FBQztJQUN2Qyw4QkFBTSxHQUFOO1FBQUEsaUJBR0M7UUFGRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNkRBQTZELENBQUM7YUFDOUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFNLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLE1BQU07UUFDakIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFDRCx1QkFBdUIsQ0FBQSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDckQsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDO1FBQ0wsQ0FBQztRQUNEOzs7Ozs7V0FNRztRQUVIO2lDQUN5QjtRQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFQSxtQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLEdBQUcsQ0FBQyxDQUFhLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTTtZQUFsQixJQUFJLElBQUksZUFBQTtZQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1NBQ0o7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBakRPLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FNaUIsaUJBQVU7T0FMM0IsYUFBYSxDQWtEekI7SUFBRCxvQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcnlwdG9TZXJ2aWNlIHtcbiAgICBwdWJsaWMgbXlBcnJheSA9IFtdO1xuICAgIHB1YmxpYyBiaXRjb2luO1xuICAgIHByaXZhdGUgY29pbkxpc3QgPSBbJ1RSWCcsJ0lPU1QnLCdYVkcnLCdQT0UnLCdDTkQnLCdUTkInLCdBREEnLCdYUlAnLCdJT1RBJywnTFRDJywnQkNYJ107XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXt9XG4gICAgZ2V0QlRDKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9hcGkuYmluYW5jZS5jb20vYXBpL3YzL3RpY2tlci9wcmljZT9zdW1ib2xlPUJUQ1VTRFQnKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4geyB0aGlzLmJpdGNvaW4gPSByZXMgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q3J5cHRvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9hcGkuYmluYW5jZS5jb20vYXBpL3YzL3RpY2tlci9wcmljZScpO1xuICAgIH1cblxuICAgIGdldENyeXB0b1ZhbHVlKGNyeXB0byl7XG4gICAgICAgIGNvbnN0IGNvaW5BcnJheSA9IFtdO1xuICAgICAgICBsZXQgbG9va3VwID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgY29pbiBpbiB0aGlzLmNvaW5MaXN0KSB7XG4gICAgICAgICAgICAgbG9va3VwW3RoaXMuY29pbkxpc3RbY29pbl0gKyAnQlRDJ10gPSB0aGlzLmNvaW5MaXN0W2NvaW5dO1xuICAgICAgICB9XG4gICAgICAgIC8qY29uc29sZS5sb2cobG9va3VwKSovO1xuICAgICAgICBmb3IgKGxldCBpIGluIGNyeXB0bykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb29rdXBbY3J5cHRvW2ldWydzeW1ib2wnXV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29pbkFycmF5LnB1c2goY3J5cHRvW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKmZvciAobGV0IGNvaW4gb2YgY3J5cHRvKSB7XG4gICAgICAgICAgICBpZihjb2luWydzeW1ib2wnXSA9PT0gJ1RSWEJUQycpe1xuICAgICAgICAgICAgICAgIGNvaW5bJ2J0Y192YWx1ZSddID0gY29pblsncHJpY2UnXSAqIDQ4MDkuNjExO1xuICAgICAgICAgICAgICAgIGNvaW5bJ3VzZF92YWx1ZSddID0gKGNvaW5bJ2J0Y192YWx1ZSddICogdGhpcy5iaXRjb2luWydwcmljZSddKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGNvaW5BcnJheS5wdXNoKGNvaW4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0qL1xuXG4gICAgICAgIC8qY29uc29sZS5sb2codGhpcy5iaXRjb2luKTtcbiAgICAgICAgY29uc29sZS5sb2coY29pbkFycmF5KTsqL1xuICAgICAgICByZXR1cm4gY29pbkFycmF5O1xuICAgIH1cblxuICAgICBnZXRCVENWYWx1ZShjcnlwdG8pe1xuICAgICAgICAgZm9yIChsZXQgY29pbiBvZiBjcnlwdG8pIHtcbiAgICAgICAgICAgICBpZihjb2luWydzeW1ib2wnXSA9PT0gJ0JUQ1VTRFQnKXtcbiAgICAgICAgICAgICAgICAgdGhpcy5iaXRjb2luID0gY29pbjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiB0aGlzLmdldENyeXB0b1ZhbHVlKGNyeXB0bylcbiAgICAgfVxufVxuXG4iXX0=