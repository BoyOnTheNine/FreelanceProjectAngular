import { Injectable } from "@angular/core";
import { User } from '../shared/user';
import { users } from '../fake-storage/fake-users';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { AuthenticationService } from "../authorise/authentication.service";
import { Observable }     from 'rxjs/Observable';

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

    CreateUser(user: User) {
        users.push(user);
    }


}