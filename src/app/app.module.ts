import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';



import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {CatalogComponent} from './platform/catalog.component';
import {FormsModule} from '@angular/forms';
import {LoadUserComponent} from './loadUserInfo/load-user-info.component';
import { OfferService } from './offer/offer.service';
import { CategoryService } from './platform/category.service';
import { CategoryInfoComponent } from './catalog-info/category-info.component';
import { OfferDetailComponent } from './offer-detail/offer-deatil.component';
import { RegisterComponent } from './register/register.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserOfferActivityComponent } from './user-offer-activity/user-offer-activity.component';
import { UserService } from './user-service/user.service';
import { LoginComponent } from './authorise/login.component';
import { AuthenticationService } from './authorise/authentication.service';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
    imports:     [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'home',component: HomeComponent},
            {path: 'authorise', component: LoginComponent},
            {path: 'catalog',component: CatalogComponent, canActivate:[AuthGuard]},
            {path: 'catalog/:id',component: CategoryInfoComponent},
            {path: 'offerdetail/:id',component: OfferDetailComponent},
            {path: 'editOffer/:id',component: UserOfferActivityComponent},
            {path: 'register',component: RegisterComponent},
            {path: '' ,redirectTo:'authorise' ,pathMatch: 'full'},
            {path:'**',component:NotFoundComponent}
        ])],
    declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    CatalogComponent,
    LoginComponent,
    LoadUserComponent,
    CategoryInfoComponent,
    OfferDetailComponent,
    RegisterComponent,
    NavigationBarComponent,
    UserOfferActivityComponent
    ],
    providers: [UserService, AuthGuard, AuthenticationService, OfferService, CategoryService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }