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
var router_1 = require('@angular/router');
var fake_Skills_1 = require('../fake-storage/fake-Skills');
var authorise_service_1 = require('../authorise/authorise.service');
var RegisterComponent = (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.userSkill = fake_Skills_1.skills[0];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.allSkills = fake_Skills_1.skills;
    };
    RegisterComponent.prototype.onClick = function () {
        this.auth.CreateUser(this.user);
        this.router.navigateByUrl('/home');
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'reg',
            templateUrl: './app/register/register.component.html'
        }), 
        __metadata('design:paramtypes', [authorise_service_1.AuthoriseService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map