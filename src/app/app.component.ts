import { Component } from '@angular/core';

import {HomeComponent} from './home/home.component'

import {CatalogComponent} from './platform/catalog.component';

import {LoginComponent} from './authorise/login.component';

import { OrderListComponent } from './order-list/order-list.component'

import {LoadUserComponent} from './loadUserInfo/load-user-info.component';

import { CategoryInfoComponent } from './catalog-info/category-info.component';
      
@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: []
})

export class AppComponent { 
  
}