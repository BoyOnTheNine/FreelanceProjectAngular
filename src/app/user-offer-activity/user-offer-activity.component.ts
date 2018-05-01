import { Component, OnInit, Input } from '@angular/core';
import {OfferService} from '../offer/offer.service';
import { User } from '../shared/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service/user.service';


@Component({
  selector: 'app-user-offer-activity',
  templateUrl: './user-offer-activity.component.html',
  styleUrls: ['./user-offer-activity.component.css']
})
export class UserOfferActivityComponent implements OnInit {

    user : User;
  constructor(private offServ: OfferService, private route: ActivatedRoute, private usrService : UserService) { }

  ngOnInit() {
    var id = +this.route.snapshot.params['id'];
    this.user = this.usrService.GetUserById(id);
  }

}
