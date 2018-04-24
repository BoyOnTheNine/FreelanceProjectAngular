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
var fake_offers_1 = require("../fake-storage/fake-offers");
var OfferService = (function () {
    function OfferService() {
    }
    OfferService.prototype.getUserOffers = function (user) {
        this.updateOffers();
        return this.allOffers.filter(function (ofr) { return ofr.user.id == user.id; });
    };
    OfferService.prototype.updateOffers = function () {
        this.allOffers = fake_offers_1.offers;
    };
    OfferService.prototype.getAllOffers = function () {
        this.updateOffers();
        return this.allOffers;
    };
    OfferService.prototype.findOffer = function (id) {
        this.updateOffers();
        return this.allOffers.filter(function (off) { return off.category.find(function (c) { return c.id == id; }); });
    };
    OfferService.prototype.getCatalogNameById = function (id) {
        return 'lol';
    };
    OfferService.prototype.getOfferById = function (id) {
        this.updateOffers();
        return this.allOffers.find(function (off) { return off.id == id; });
    };
    OfferService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], OfferService);
    return OfferService;
}());
exports.OfferService = OfferService;
//# sourceMappingURL=offer.service.js.map