import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {Offer} from '../shared/offer';
import {OfferService} from '../offer/offer.service';
import { UserService } from '../user-service/user.service';
import { AuthenticationService } from '../authorise/authentication.service';

@Component({
    selector: "load",
    templateUrl: 'load-user-info.component.html',
    styleUrls: ['load-user-info.component.css']
})
export class LoadUserComponent implements OnInit{
    @Input() user: User;
    offers: Offer[];
    isEditing = false;
    constructor(private offerService : OfferService, 
        private userService: UserService, 
        private authService: AuthenticationService) {}

    ngOnInit(){
        this.userService.GetUserByLogin(this.authService.loginString).subscribe(data => {
            this.user = data;
            console.log('this.user = ' + this.user)});
      this.offers =  this.offerService.getUserOffers(this.user);
    }
    onClick(){
        this.isEditing = true;
    }

    saveChanges(){
        this.userService.UpdateUser(this.user).subscribe();
        this.isEditing = false;
    }
}