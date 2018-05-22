import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserOrder } from '../shared/userOrder';

@Injectable()
export class SenderService {

  private serverUrl: string = 'http://localhost:8080/api/v1/mail';

  constructor(private http: HttpClient) { }


  sendAll( subj: string, text: string){
    let body= {
        subject:subj,
        text:text,
        fromEmail:'freelanceplatformspp@gmail.com'
      }
    return this.http.put(this.serverUrl + '/sendAll',body);

  }

  sendUser(to: string, subj: string, text: string){

    let body= {
        subject:subj,
        text:text,
        fromEmail:"freelanceplatformspp@gmail.com",
        toEmail:to
    }
    return this.http.put(this.serverUrl + '/send', body);
  }

}
