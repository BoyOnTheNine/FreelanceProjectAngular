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
var offer_service_1 = require('../offer/offer.service');
var CategoryInfoComponent = (function () {
    function CategoryInfoComponent(route, offService) {
        this.route = route;
        this.offService = offService;
        this.objOffers = undefined;
    }
    CategoryInfoComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.getOffer(id);
    };
    CategoryInfoComponent.prototype.getOffer = function (Id) {
        this.objOffers = this.offService.findOffer(Id);
    };
    CategoryInfoComponent.prototype.getCatName = function (Id) {
        this.categoryName = this.offService.getCatalogNameById(Id);
    };
    CategoryInfoComponent = __decorate([
        core_1.Component({
            selector: 'category-info',
            templateUrl: './app/catalog-info/category-info.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, offer_service_1.OfferService])
    ], CategoryInfoComponent);
    return CategoryInfoComponent;
}());
exports.CategoryInfoComponent = CategoryInfoComponent;
//# sourceMappingURL=category-info.component.js.map