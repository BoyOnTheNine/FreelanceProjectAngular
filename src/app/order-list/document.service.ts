import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserOrder } from '../shared/userOrder';
import { RequestOptions } from '@angular/http';

@Injectable()
export class DocumentService {

  private serverUrl: string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }


  loadDocument(format: String, id: Number){
    let headers = new Headers({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/pdf'
     });
    return this.http.get(this.serverUrl + '/document/' + format +'/'+ id, {responseType: 'text'});

  }

  addOrder(order: UserOrder){
    let body= {
      offer:order.offer,
      workers:order.workers
    }
    return this.http.post(this.serverUrl + '/orders', body);
  }

}
