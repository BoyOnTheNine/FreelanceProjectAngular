import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../shared/user';
import {skills} from '../fake-storage/fake-Skills';
import {Skill} from '../shared/skill'
import {FormsModule} from '@angular/forms';
import { UserService } from '../user-service/user.service';
import { AlertService } from '../alert-service/alert.service';

    
@Component({
    selector: 'reg',
    templateUrl: 'register.component.html'
  
})
export class RegisterComponent implements OnInit  { 
    
     model: any = {};

     loading = false;


     constructor(private router: Router, 
        private userService : UserService, 
        private alertService: AlertService){}

     ngOnInit(){
        
        
     }

     onClick(){
         this.loading = true;
        this.userService.CreateUser(this.model).subscribe(data => {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/authorise']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });;
        this.router.navigateByUrl('/home');
     }
    

}