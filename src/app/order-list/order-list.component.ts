import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { UserService } from '../user-service/user.service';
import { UserOrder } from '../shared/userOrder';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: UserOrder[];
  constructor(private ordServise: OrderService,private usrServise: UserService) { }

  ngOnInit() {
    this.ordServise.getAllOffers().subscribe(res => this.orders = res)
  }

}
