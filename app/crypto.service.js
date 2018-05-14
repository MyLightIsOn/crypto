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
        for (var _i = 0, crypto_1 = crypto; _i < crypto_1.length; _i++) {
            var coin = crypto_1[_i];
            if (coin['symbol'] === 'TRXBTC') {
                coin['btc_value'] = coin['price'] * 4809.611;
                coin['usd_value'] = (coin['btc_value'] * this.bitcoin['price']).toFixed(2);
                coinArray.push(coin);
            }
        }
        console.log(this.bitcoin);
        console.log(coinArray);
        return coinArray;
    };
    CryptoService.prototype.getBTCValue = function (crypto) {
        for (var _i = 0, crypto_2 = crypto; _i < crypto_2.length; _i++) {
            var coin = crypto_2[_i];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcnlwdG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6Qyw2Q0FBa0Q7QUFFbEQsaUNBQStCO0FBQy9CLG1DQUFpQztBQUlqQztJQUlJLHVCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDdCLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFHa0IsQ0FBQztJQUN2Qyw4QkFBTSxHQUFOO1FBQUEsaUJBR0M7UUFGRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNkRBQTZELENBQUM7YUFDOUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFNLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLE1BQU07UUFDakIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxDQUFhLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTTtZQUFsQixJQUFJLElBQUksZUFBQTtZQUVULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUNKO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFQSxtQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLEdBQUcsQ0FBQyxDQUFhLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTTtZQUFsQixJQUFJLElBQUksZUFBQTtZQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1NBQ0o7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBdENPLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7T0FKM0IsYUFBYSxDQXVDekI7SUFBRCxvQkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcnlwdG9TZXJ2aWNlIHtcbiAgICBwdWJsaWMgbXlBcnJheSA9IFtdO1xuICAgIHB1YmxpYyBiaXRjb2luO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCl7fVxuICAgIGdldEJUQygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHBzOi8vYXBpLmJpbmFuY2UuY29tL2FwaS92My90aWNrZXIvcHJpY2U/c3VtYm9sZT1CVENVU0RUJylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHsgdGhpcy5iaXRjb2luID0gcmVzIH0pO1xuICAgIH1cblxuICAgIGdldENyeXB0bygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHBzOi8vYXBpLmJpbmFuY2UuY29tL2FwaS92My90aWNrZXIvcHJpY2UnKTtcbiAgICB9XG5cbiAgICBnZXRDcnlwdG9WYWx1ZShjcnlwdG8pe1xuICAgICAgICBjb25zdCBjb2luQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgY29pbiBvZiBjcnlwdG8pIHtcblxuICAgICAgICAgICAgaWYoY29pblsnc3ltYm9sJ10gPT09ICdUUlhCVEMnKXtcbiAgICAgICAgICAgICAgICBjb2luWydidGNfdmFsdWUnXSA9IGNvaW5bJ3ByaWNlJ10gKiA0ODA5LjYxMTtcbiAgICAgICAgICAgICAgICBjb2luWyd1c2RfdmFsdWUnXSA9IChjb2luWydidGNfdmFsdWUnXSAqIHRoaXMuYml0Y29pblsncHJpY2UnXSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBjb2luQXJyYXkucHVzaChjb2luKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iaXRjb2luKTtcbiAgICAgICAgY29uc29sZS5sb2coY29pbkFycmF5KTtcbiAgICAgICAgcmV0dXJuIGNvaW5BcnJheTtcbiAgICB9XG5cbiAgICAgZ2V0QlRDVmFsdWUoY3J5cHRvKXtcbiAgICAgICAgIGZvciAobGV0IGNvaW4gb2YgY3J5cHRvKSB7XG4gICAgICAgICAgICAgaWYoY29pblsnc3ltYm9sJ10gPT09ICdCVENVU0RUJyl7XG4gICAgICAgICAgICAgICAgIHRoaXMuYml0Y29pbiA9IGNvaW47XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfVxuXG4gICAgICAgICByZXR1cm4gdGhpcy5nZXRDcnlwdG9WYWx1ZShjcnlwdG8pXG4gICAgIH1cbn1cblxuIl19