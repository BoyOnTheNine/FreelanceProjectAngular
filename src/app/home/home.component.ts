import { Component, OnChanges, DoCheck } from '@angular/core';

import {User} from '../shared/user';

import {LoadUserComponent} from '../loadUserInfo/load-user-info.component';

      
@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent  implements DoCheck{ 
    
    constructor(){}

     ngDoCheck()
     {
     }
 
}