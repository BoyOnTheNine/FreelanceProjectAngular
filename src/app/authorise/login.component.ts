import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user';

import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert-service/alert.service';

      
@Component({
    selector: 'auth',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(data => {
                    this.router.navigate(['home']);
                    this.loading = false;
            }, error => {
              this.loading = false;
              this.alertService.error(error);
            });
    }

    onRegister(){
        this.router.navigateByUrl("/register");
    }
}