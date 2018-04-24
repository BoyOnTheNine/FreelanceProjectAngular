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
var core_1 = require('@angular/core');
var authorise_service_1 = require('./authorise.service');
var router_1 = require('@angular/router');
var AuthoriseComponent = (function () {
    function AuthoriseComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthoriseComponent.prototype.onAuthoriseUser = function () {
        this.curUser = this.authService.CheckUser(this.login, this.password);
    };
    AuthoriseComponent.prototype.onDeauthoriseUser = function () {
        this.curUser = undefined;
        this.authService.LogOutUser();
    };
    AuthoriseComponent.prototype.ngDoCheck = function () {
        this.curUser = this.authService.GetUser();
    };
    AuthoriseComponent.prototype.onRegister = function () {
        this.router.navigateByUrl('/register');
    };
    AuthoriseComponent = __decorate([
        core_1.Component({
            selector: 'auth',
            templateUrl: './app/authorise/authorise.component.html'
        }), 
        __metadata('design:paramtypes', [authorise_service_1.AuthoriseService, router_1.Router])
    ], AuthoriseComponent);
    return AuthoriseComponent;
}());
exports.AuthoriseComponent = AuthoriseComponent;
//# sourceMappingURL=authorise.component.js.map