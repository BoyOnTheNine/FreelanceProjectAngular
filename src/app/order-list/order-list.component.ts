import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { UserService } from '../user-service/user.service';
import { UserOrder } from '../shared/userOrder';
import { DocumentService } from './document.service';
import 'rxjs/Rx' ;
import { Router } from '@angular/router';
import { AuthenticationService } from '../authorise/authentication.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: UserOrder[];
  format: String;

  constructor(private ordServise: OrderService,private usrServise: UserService,private docServ: DocumentService,private router:Router,private authServise: AuthenticationService) { }

  ngOnInit() {
    this.ordServise.getAllOffers().subscribe(res => {
       let curOrd = res;
        this.usrServise.GetUserByLogin(this.authServise.loginString).subscribe(data =>{
            this.orders = curOrd.filter(o => o.workers.find(u => u.id === data.id))
        })
    })
  }


  onLoad(id: Number){
    this.docServ.loadDocument(this.format,id);
  }

  onDelete(id: Number){
      this.ordServise.deleteOffer(id).subscribe(o => this.router.navigateByUrl('/userInfo'));
  }

 

}
