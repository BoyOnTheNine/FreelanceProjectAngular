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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var page_not_found_component_1 = require('./page-not-found/page-not-found.component');
var home_component_1 = require('./home/home.component');
var catalog_component_1 = require('./platform/catalog.component');
var authorise_component_1 = require('./authorise/authorise.component');
var authorise_service_1 = require('./authorise/authorise.service');
var forms_1 = require('@angular/forms');
var load_user_info_component_1 = require('./loadUserInfo/load-user-info.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'authorise', component: authorise_component_1.AuthoriseComponent },
                    { path: 'catalog', component: catalog_component_1.CatalogComponent },
                    { path: '', redirectTo: 'authorise', pathMatch: 'full' },
                    { path: '**', component: page_not_found_component_1.NotFoundComponent }
                ])],
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.NotFoundComponent,
                home_component_1.HomeComponent,
                catalog_component_1.CatalogComponent,
                authorise_component_1.AuthoriseComponent,
                load_user_info_component_1.LoadUserComponent
            ],
            providers: [authorise_service_1.AuthoriseService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.1.js.map