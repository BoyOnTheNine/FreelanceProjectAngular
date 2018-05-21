import { Injectable, EventEmitter, Output, OnInit, DoCheck } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user-service/user.service';

@Injectable()
export class AuthenticationService implements DoCheck {
    
    public token: string;
    private readonly serverUrl = 'http://localhost:8080';
    @Output() isAdmin: boolean = false;
    @Output() loginString: string;
    @Output() logged = false;
    
    constructor(private http: HttpClient, private usrService: UserService) {      
    }
    ngDoCheck(){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    


    login(username: string, password: string): Observable<boolean> {
        var headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");
        return this.http.post<any>(this.serverUrl + '/signin', { loginOrEmail: username, password: password },{headers:headers})
            .map(res => {
                let token = res && res.accessToken;// login successful if there's a jwt token in the response
                if (res && res.accessToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    this.loginString = username;
                    this.logged = true;
                    this.checkOnAdmin();
                    return true;
                }else{
                    return false;
                }
            });
    }
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.logged = false;
        this.loginString = null;
        this.isAdmin = false;
        localStorage.removeItem('currentUser');
    }

    checkOnAdmin(){
        this.usrService.GetUserByLogin(this.loginString).subscribe(res => {
            if(res.roles.find(role => role.name === "ROLE_ADMIN"))
                this.isAdmin = true;
        })
    }
}
