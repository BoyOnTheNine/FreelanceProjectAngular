import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserOrder } from '../shared/userOrder';

@Injectable()
export class OrderService {

  private serverUrl: string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }


  getAllOffers(){
 
    return this.http.get<UserOrder[]>(this.serverUrl + '/orders');

  }

  addOrder(order: UserOrder){
    let body= {
      offer:order.offer,
      workers:order.workers
    }
    return this.http.post(this.serverUrl + '/orders', body);
  }

}
