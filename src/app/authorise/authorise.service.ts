import { Injectable } from "@angular/core";
import {User} from '../shared/user';
import { UserService } from "../user-service/user.service";



@Injectable()
export class AuthoriseService{
    authUser: User = undefined;

      constructor(private usrService: UserService){}

    LogInUser(login: string, password: string) : User{
       let users = this.usrService.GetAllUsers();
       let user = users.find(usr => usr.login === login);
       if(user!= undefined){
           this.authUser = user;
       }    
       return user
    }

    
    CheckOnLogin(): boolean{
        if(this.authUser == undefined)
            return false;
        return true;
    }
    
    LogOutUser(){
        this.authUser = undefined;
    }

    GetAuthUser(): User{
        return this.authUser;
    }



}