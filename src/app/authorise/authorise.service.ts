import { Injectable } from "@angular/core";
import {User} from '../shared/user';
import {users} from '../fake-storage/fake-users'


Injectable()
export class AuthoriseService{
    user: User = undefined;

    CheckUser(login: string, password: string) : User{
        this.user = users.find(log => log.login == login);
        return this.user;
    }

    SetUser(user :User){
        this.user = user;
    }

    LogOutUser(){
        this.user = undefined;
    }

    GetUser() : User{
         return this.user;
    }

    findUserByOfferId(id: Number) {
     
    }

    CreateUser(user :User){
           users.push(user);
    }



}