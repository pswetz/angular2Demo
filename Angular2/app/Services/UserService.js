"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var UserData_1 = require("../MoqDataApi/UserData");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(httpService) {
        this.LoggedInUser = new Rx_1.ReplaySubject();
        this.LoggedInUser$ = this.LoggedInUser.asObservable();
        this.CurrentUser = new Rx_1.ReplaySubject();
        this.CurrentUser$ = this.CurrentUser.asObservable();
        this.UserList = new Rx_1.ReplaySubject();
        this.UserList$ = this.UserList.asObservable();
        this._httpService = httpService;
    }
    UserService.prototype.SetLoggedInUser = function (id) {
        var _this = this;
        return this._httpService.get(UserData_1.UserData.Url + "/" + id)
            .map(function (x) { return x.json(); })
            .subscribe(function (data) {
            if (data.data) {
                data = data.data;
            }
            _this.LoggedInUserId = data.id;
            _this.LoggedInUser.next(data);
        });
    };
    UserService.prototype.User = function (id) {
        var _this = this;
        return this._httpService.get(UserData_1.UserData.Url + "/" + id)
            .map(function (x) { return x.json(); })
            .subscribe(function (data) {
            if (data.data) {
                data = data.data;
            }
            _this.CurrentUser.next(data);
        });
    };
    UserService.prototype.Update = function (user) {
        var _this = this;
        return this._httpService.put(UserData_1.UserData.Url + "/" + user.id, JSON.stringify(user), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        })
            .map(function (x) {
            return x.json();
        })
            .subscribe(function () {
            _this.CurrentUser.next(user);
            _this.LoggedInUser.map(function (x) { return x.id === user.id; }).subscribe(function (data) {
                _this.LoggedInUserId = user.id;
                _this.LoggedInUser.next(user);
            });
        });
    };
    UserService.prototype.Users = function () {
        var _this = this;
        return this._httpService.get(UserData_1.UserData.Url)
            .map(function (x) { return x.json(); })
            .subscribe(function (data) {
            _this.UserList.next(data);
        });
    };
    UserService.prototype.remove = function (id) {
        this._httpService.delete(UserData_1.UserData.Url + ("/" + id))
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
;
var User = (function () {
    function User(userId, userName, firstName, lastName, email) {
        this.id = userId;
        this.Username = userName;
        this.Firstname = firstName;
        this.Lastname = lastName;
        this.Email = email;
    }
    return User;
}());
exports.User = User;
;
//# sourceMappingURL=UserService.js.map