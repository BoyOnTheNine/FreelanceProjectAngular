import { Injectable } from "@angular/core";
import { User } from '../shared/user';
import { users } from '../fake-storage/fake-users';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { AuthenticationService } from "../authorise/authentication.service";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private http: Http, private authService: AuthenticationService) { }

    private readonly serverUrl = 'http://localhost:8080/api/v1';

    private user: User;

    GetAllUsers(): User[] {
        return users;
    }

    GetUserById(id: Number): User {
        return users.find(usr => usr.id === id);
    }

    GetUserByLogin(login: string): Observable<User> {
        let headers = new Headers({
            'Authorization': 'Bearer ' + this.authService.token
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.serverUrl + "/user/login/" + login, options).map((response: Response) =>response.json());
    }

    UpdateUser(user: User): Observable<User>{
        let headers = new Headers({
            'Authorization': 'Bearer ' + this.authService.token,
            "Content-Type":"application/json"
        });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify({
            firstName:user.firstName, 
            lastName:user.lastName,
            country:user.country,
            phoneNumber:user.phoneNumber
        });
        console.log('Options: ' + JSON.stringify(options));
        return this.http.put(this.serverUrl+"/users/"+ user.id, body, {headers: headers})
        .map((response: Response) => response.json());
    }

    CreateUser(user: User) {
        users.push(user);
    }


}