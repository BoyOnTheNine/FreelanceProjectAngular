import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../shared/user';
import {skills} from '../fake-storage/fake-Skills';
import {Skill} from '../shared/skill'
import {FormsModule} from '@angular/forms';
import { UserService } from '../user-service/user.service';

    
@Component({
    selector: 'reg',
    templateUrl: 'register.component.html'
  
})
export class RegisterComponent implements OnInit  { 
    
     user: User = new User(0,"","","","",0,"",0,[],[]);
     curSkill: Skill;
      skills : Skill[] = [
        {id: 1, name: ".Net"},
        {id: 2, name: "JS"},
        {id: 3, name: "Java"},
        {id: 4, name: "Clean"}
    ]
     userSkill :Skill = skills[0];


     constructor(private router: Router, private userService : UserService){}

     ngOnInit(){
        
        
     }

     onClick(){
        this.userService.CreateUser(this.user);
        this.router.navigateByUrl('/home');
     }
    

}