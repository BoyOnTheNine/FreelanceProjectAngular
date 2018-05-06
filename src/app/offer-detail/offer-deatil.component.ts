import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Offer} from '../shared/offer';
import { OfferService } from '../offer/offer.service';
import {LoadUserComponent} from '../loadUserInfo/load-user-info.component';
import { User } from '../shared/user';

    
@Component({
    selector: 'offer-detail',
    templateUrl: 'offer-detail.component.html'
  
})
export class OfferDetailComponent implements OnInit  { 
    
     user: User;
     offer: Offer;

    constructor(private route: ActivatedRoute, private offerService: OfferService){}

    ngOnInit(){
       var id = +this.route.snapshot.params['id'];
       this.findOffer(id);
    
    }

    findOffer(id: Number){
        this.offer = this.offerService.getOfferById(id);
        this.user = this.offer.user;
    }


    

}