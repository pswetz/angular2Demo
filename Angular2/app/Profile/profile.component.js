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
var UserService_1 = require("../Services/UserService");
var ProfileComponent = (function () {
    function ProfileComponent(uService) {
        this.uService = uService;
        this.User = new UserService_1.User(-1, "", "", "", "");
        if (this.User === undefined || this.User.id < 0) {
            this.uService.User(this.uService.LoggedInUserId);
        }
    }
    ;
    ProfileComponent.prototype.onKey = function (newValue, field) {
        if (this.User.hasOwnProperty(field)) {
            if (this.User[field] !== newValue) {
                this.User[field] = newValue;
            }
        }
        this.uService.Update(this.User);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserSub = this.uService.CurrentUser$.subscribe(function (x) {
            if (_this.User === undefined || _this.User.id < 0 || _this.User.id !== x.id)
                _this.User = x;
        }, function (error) {
            console.log("error in ProfileComponent " + error);
            // handle errors
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.currentUserSub.unsubscribe();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ag-profile",
            templateUrl: "index.html",
            providers: []
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map