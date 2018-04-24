import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {CatalogComponent} from './platform/catalog.component';
import {AuthoriseComponent} from './authorise/authorise.component';
import { AuthoriseService } from './authorise/authorise.service';
import {FormsModule} from '@angular/forms';
import {LoadUserComponent} from './loadUserInfo/load-user-info.component';


@NgModule({
    imports:     [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'home',component: HomeComponent},
            {path: 'authorise', component: AuthoriseComponent},
            {path: 'catalog',component: CatalogComponent},
            {path: '' ,redirectTo:'authorise' ,pathMatch: 'full'},
            {path:'**',component:NotFoundComponent}
        ])],
    declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    CatalogComponent,
    AuthoriseComponent,
    LoadUserComponent
    ],
    providers: [AuthoriseService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }