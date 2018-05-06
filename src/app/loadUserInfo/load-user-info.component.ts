import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {Offer} from '../shared/offer';
import {OfferService} from '../offer/offer.service';

@Component({
    selector: "load",
    templateUrl: 'load-user-info.component.html',
    styleUrls: ['load-user-info.component.css']
})
export class LoadUserComponent implements OnInit{
    @Input() user: User;
    offers: Offer[];

    constructor(private offerService : OfferService) {}

    ngOnInit(){
      this.offers =  this.offerService.getUserOffers(this.user);
    }
}