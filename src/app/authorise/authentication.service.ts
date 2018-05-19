import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    
    public token: string;
    private readonly serverUrl = 'http://localhost:8080';
    @Output() loginString: string;
    @Output() logged = false;
    
    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }



    login(username: string, password: string): Observable<boolean> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.serverUrl + '/signin', JSON.stringify({ "loginOrEmail": username, "password": password }), {headers: headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().accessToken;
                if (token) {
                    // set token property
                    this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    this.loginString = username;
                    this.logged = true;
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.logged = false;
        this.loginString = null;
        localStorage.removeItem('currentUser');
    }
}
