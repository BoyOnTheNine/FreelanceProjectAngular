import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../shared/user';
import {skills} from '../fake-storage/fake-Skills';
import {Skill} from '../shared/skill'
import {FormsModule} from '@angular/forms';
import {AuthoriseService} from '../authorise/authorise.service';

    
@Component({
    selector: 'reg',
    templateUrl: 'register.component.html'
  
})
export class RegisterComponent implements OnInit  { 
    
     user: User;
     allSkills: Skill[];
     userSkill :Skill = skills[0];

     constructor(private auth: AuthoriseService,private router: Router){}

     ngOnInit(){
            this.allSkills = skills;
        
     }

     onClick(){
        this.auth.CreateUser(this.user);
        this.router.navigateByUrl('/home');
     }
    

}