import { Component, OnInit, Input } from '@angular/core';
import {OfferService} from '../offer/offer.service';
import { User } from '../shared/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service/user.service';
import { Offer } from '../shared/offer';


@Component({
  selector: 'app-user-offer-activity',
  templateUrl: './user-offer-activity.component.html',
  styleUrls: ['./user-offer-activity.component.css']
})
export class UserOfferActivityComponent implements OnInit {

    offer : Offer;
    isNew: boolean = false;
  constructor(private offServ: OfferService, private route: ActivatedRoute, private usrService : UserService) { }

  ngOnInit() {
   var id = +this.route.snapshot.params['id'];
   if(id === 0) this.isNew = !this.isNew;
   if(!this.isNew)
      this.offer = this.offServ.getOfferById(id);
  }

  onDelete(){

  }

}
