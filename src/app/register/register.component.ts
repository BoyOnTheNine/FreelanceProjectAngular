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
      skills : Skill[] = [
        {id: 1, name: ".Net"},
        {id: 2, name: "JS"},
        {id: 3, name: "Java"},
        {id: 4, name: "Clean"}
    ]
     userSkill :Skill = skills[0];


     constructor(private auth: AuthoriseService,private router: Router){}

     ngOnInit(){
        
        
     }

     onClick(){
       
        this.router.navigateByUrl('/home');
     }
    

}