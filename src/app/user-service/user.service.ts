import { Injectable } from "@angular/core";
import { User } from '../shared/user';
import { Skill } from '../shared/skill'

import { AuthenticationService } from "../authorise/authentication.service";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {

    constructor(private http: HttpClient, private authService: AuthenticationService) { }

    private readonly serverUrl = 'http://localhost:8080/api/v1';

    private user: User;

    GetUserByLogin(login: string){
        return this.http.get<User>(this.serverUrl + "/user/login/" + login);
    }

    UpdateUser(user: User){

        let body = {
            firstName:user.firstName, 
            lastName:user.lastName,
            country:user.country,
            phoneNumber:user.phoneNumber,
            skills: user.skills
        };
        return this.http.put(this.serverUrl + "/users/" + user.id, body);
    }
    CreateUser(user: any) {
        let body = {
            firstName:user.firstName, 
            lastName:user.lastName,
            login:user.login,
            email:user.email,
            password:user.password
        };
        return this.http.post('http://localhost:8080/signup', body);
    }

    updateUserSkills(skill: Skill[], id: Number){
        let body = {
            skills: skill
        };
        return this.http.put(this.serverUrl + "/users/" + id, body);
    }
}