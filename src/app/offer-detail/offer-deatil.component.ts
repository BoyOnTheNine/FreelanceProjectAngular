import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Offer} from '../shared/offer';
import { OfferService } from '../offer/offer.service';
import {LoadUserComponent} from '../loadUserInfo/load-user-info.component';
import { User } from '../shared/user';
import { OrderService } from '../order-list/order.service';
import { UserOrder } from '../shared/userOrder';
import { AlertService } from '../alert-service/alert.service';
import { AuthenticationService } from '../authorise/authentication.service';
import { UserService } from '../user-service/user.service';

    
@Component({
    selector: 'offer-detail',
    templateUrl: 'offer-detail.component.html',
    styleUrls: ['./offer-detail.component.css']
  
})
export class OfferDetailComponent implements OnInit  { 
    
     user: User;
     offer: Offer;
     isInfo: boolean = false;
     order: UserOrder;
   

    constructor(private route: ActivatedRoute, private offerService: OfferService,private ordService: OrderService,private router: Router,private alert: AlertService,
                private autServ: AuthenticationService, private usrServ: UserService){}

    ngOnInit(){
       var id = +this.route.snapshot.params['id'];
       this.findOffer(id);
       this.usrServ.GetUserByLogin(this.autServ.loginString).subscribe(res => this.user = res);
    
    }

    findOffer(id: Number){
        this.offer = this.offerService.getOfferById(id);
        
    }
    
    onShow(){
        this.isInfo = !this.isInfo;
    }

    onAdd(){
       /* this.ordService.getAllOffers().subscribe(res => {
             let orders = res;
             if(orders.filter(o => o.workers.find(u => u.id === this.user.id))){ 
                 
                this.order = new UserOrder;
                 this.order.offer = this.offer;                             ЭТФ ХУЙНЯ ДОЛЖНА ДЕЛАТЬ ПРОВЕРКУ СУЩЕСТВУЕТ ЛИ У ЮЗЕРА ОРДЕР, НО ПОЧЕМУ ТА НЕ ПАШЕТ!!!!!!!!!!!!!!!(((((((
                 let workers = new Array<User>();
                 workers.push(this.user);
                this.order.workers = workers;
                  this.ordService.addOrder(this.order).subscribe(o => this.router.navigateByUrl('/userInfo')  );
               
             }
             else{
                this.alert.error("Already have this order!");
             } */

              
            this.order = new UserOrder;
            this.order.offer = this.offer;
            let workers = new Array<User>();
            workers.push(this.user);
            this.order.workers = workers;
            this.ordService.addOrder(this.order).subscribe(o => this.router.navigateByUrl('/userInfo')  );
        
        }
  
               
    }


    

