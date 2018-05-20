import { Injectable } from "@angular/core";
import { User } from '../shared/user';
import { users } from '../fake-storage/fake-users';
import { AuthenticationService } from "../authorise/authentication.service";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {

    constructor(private http: HttpClient, private authService: AuthenticationService) { }

    private readonly serverUrl = 'http://localhost:8080/api/v1';

    private user: User;

    GetAllUsers(): User[] {
        return users;
    }

    GetUserById(id: Number): User {
        return users.find(usr => usr.id === id);
    }

    GetUserByLogin(login: string){
        return this.http.get<User>(this.serverUrl + "/user/login/" + login);
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
    CreateUser(user: User) {
        return this.http.post(this.serverUrl + "/signup", JSON.stringify(user));
    }


}