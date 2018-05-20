import {Component, Input, DoCheck, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {Offer} from '../shared/offer';
import {OfferService} from '../offer/offer.service';
import { UserService } from '../user-service/user.service';
import { AuthenticationService } from '../authorise/authentication.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
    selector: "load",
    templateUrl: 'load-user-info.component.html',
    styleUrls: ['load-user-info.component.css']
})
export class LoadUserComponent implements OnInit{
    @Input() user: User;
    offers: Offer[];
    isEditing = false;
    isShow : boolean = false;
    constructor(private offerService : OfferService, 
        private userService: UserService, 
        private authService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit(){
        this.userService.GetUserByLogin(this.authService.loginString).subscribe(data => {
            this.user = data;
            console.log('this.user = ' + this.user)});

     
     
    }
    onClick(){
        this.isEditing = true;
    }

    onShowOffer(){
        this.isShow = !this.isShow;
        this.offers = this.offerService.getUserOffers(this.user.id);
    }

    saveChanges(){
        this.userService.UpdateUser(this.user).subscribe(data => {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            this.alertService.success('Changes successfully saved', true);
        },
        error => {
            this.alertService.error(error);
        });
        this.isEditing = false;
    }
}