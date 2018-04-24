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
var fake_category_1 = require('../fake-storage/fake-category');
var offer_service_1 = require('../offer/offer.service');
var CategoryService = (function () {
    function CategoryService(offServ) {
        this.offServ = offServ;
    }
    CategoryService.prototype.updateCategory = function () {
        this.allCategorys = fake_category_1.categorys;
    };
    CategoryService.prototype.getCategorys = function () {
        this.updateCategory();
        this.countOffersForCategory();
        return this.allCategorys;
    };
    CategoryService.prototype.countOffersForCategory = function () {
        var currOff = this.offServ.getAllOffers();
        var _loop_1 = function(category) {
            category.offersCount = 0;
            for (var _i = 0, currOff_1 = currOff; _i < currOff_1.length; _i++) {
                var offer = currOff_1[_i];
                var curCat = offer.category.filter(function (c) { return c.id == category.id; });
                category.offersCount += curCat.length;
            }
        };
        for (var _a = 0, _b = this.allCategorys; _a < _b.length; _a++) {
            var category = _b[_a];
            _loop_1(category);
        }
    };
    CategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [offer_service_1.OfferService])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map