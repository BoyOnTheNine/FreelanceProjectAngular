import { Injectable } from "@angular/core";
import {User} from '../shared/user';
import {users} from '../fake-storage/fake-users';

@Injectable()
export class UserService{
  
    constructor(){}

    GetAllUsers() : User[]{
        return users;
    }

    GetUserById(id : Number) : User{
        return users.find(usr => usr.id === id);
    }

    CreateUser(user : User){
        users.push(user);
    }
}