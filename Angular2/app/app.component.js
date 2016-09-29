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
var UserService_1 = require("./Services/UserService");
var AppComponent = (function () {
    function AppComponent(uService) {
        this.uService = uService;
        this.LoggedInUser = "";
        this.title = "Application";
        this.uService.SetLoggedInUser(1); // this is setting up the 'current user prop in the service.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UserSub = this.uService.LoggedInUser$.subscribe(function (x) {
            if (_this.LoggedInUser !== x.Username) {
                _this.LoggedInUser = x.Username;
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.UserSub.unsubscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ag-app",
            templateUrl: "app.html",
            providers: []
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map