import { Component, DoCheck } from '@angular/core';

import {User} from '../shared/user';

import {AuthoriseService} from './authorise.service';
import {Router} from '@angular/router';

      
@Component({
    selector: 'auth',
    templateUrl: 'authorise.component.html',
    styleUrls: ['authorize.component.css']

})

export class AuthoriseComponent implements DoCheck { 
    curUser: User;

    password: string;

    login: string;

    constructor(private authService : AuthoriseService, private router: Router){}

    onAuthoriseUser(){

       this.curUser = this.authService.CheckUser(this.login,this.password);
    }

    onDeauthoriseUser(){
        this.curUser = undefined;
        this.authService.LogOutUser();
    }
    
    ngDoCheck(){
        this.curUser = this.authService.GetUser();
    }

    onRegister(){
            this.router.navigateByUrl('/register');
    }

}