import { Component, OnChanges, DoCheck } from '@angular/core';

import {User} from '../shared/user';

import {AuthoriseService} from '../authorise/authorise.service';
import {LoadUserComponent} from '../loadUserInfo/load-user-info.component';

      
@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent  implements DoCheck{ 
    
    user: User = undefined;

    constructor(private authService: AuthoriseService){}

     ngDoCheck()
     {
          this.user = this.authService.GetUser();
     }
 
}