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
var user_1 = require('../shared/user');
var offer_service_1 = require('../offer/offer.service');
var LoadUserComponent = (function () {
    function LoadUserComponent(offerService) {
        this.offerService = offerService;
    }
    LoadUserComponent.prototype.ngOnInit = function () {
        this.offers = this.offerService.getUserOffers(this.user);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], LoadUserComponent.prototype, "user", void 0);
    LoadUserComponent = __decorate([
        core_1.Component({
            selector: "load",
            templateUrl: './app/loadUserInfo/load-user-info.component.html'
        }), 
        __metadata('design:paramtypes', [offer_service_1.OfferService])
    ], LoadUserComponent);
    return LoadUserComponent;
}());
exports.LoadUserComponent = LoadUserComponent;
//# sourceMappingURL=load-user-info.component.js.map