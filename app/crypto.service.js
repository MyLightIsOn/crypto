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
    CryptoService.prototype.getCrypto = function () {
        return this.http.get('https://api.binance.com/api/v3/ticker/price');
    };
    CryptoService.prototype.getBTCValue = function (crypto) {
        for (var _i = 0, crypto_1 = crypto; _i < crypto_1.length; _i++) {
            var coin = crypto_1[_i];
            console.log('-------------------------');
            console.log('Coin: ' + coin['symbol']);
            console.log('Price: ' + coin['price']);
        }
    };
    CryptoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CryptoService);
    return CryptoService;
}());
exports.CryptoService = CryptoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcnlwdG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6Qyw2Q0FBa0Q7QUFFbEQsaUNBQStCO0FBQy9CLG1DQUFpQztBQUlqQztJQUdJLHVCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjdCLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFFa0IsQ0FBQztJQUN2QyxpQ0FBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsR0FBRyxDQUFDLENBQWEsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNO1lBQWxCLElBQUksSUFBSSxlQUFBO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQWRRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FJaUIsaUJBQVU7T0FIM0IsYUFBYSxDQWV6QjtJQUFELG9CQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyeXB0b1NlcnZpY2Uge1xuICAgIHB1YmxpYyBteUFycmF5ID0gW107XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXt9XG4gICAgZ2V0Q3J5cHRvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9hcGkuYmluYW5jZS5jb20vYXBpL3YzL3RpY2tlci9wcmljZScpO1xuICAgIH1cblxuICAgIGdldEJUQ1ZhbHVlKGNyeXB0byl7XG4gICAgICAgIGZvciAodmFyIGNvaW4gb2YgY3J5cHRvKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvaW46ICcgKyBjb2luWydzeW1ib2wnXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJpY2U6ICcgKyBjb2luWydwcmljZSddKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19