import { Injectable } from "@angular/core";
import { User } from '../shared/user';

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

    GetUserById(id: Number) {
        return this.http.get<User>(this.serverUrl + '/users/' + id)
    }

    UpdateUser(user: User){

        let body = {
            firstName:user.firstName, 
            lastName:user.lastName,
            country:user.country,
            phoneNumber:user.phoneNumber
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


}