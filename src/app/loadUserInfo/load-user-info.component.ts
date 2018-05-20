import {Component, Input, DoCheck, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {Offer} from '../shared/offer';
import {Skill} from '../shared/skill';
import {OfferService} from '../offer/offer.service';
import { UserService } from '../user-service/user.service';
import { AuthenticationService } from '../authorise/authentication.service';
import { AlertService } from '../alert-service/alert.service';
import { SkillService } from '../skill-service/skill.service';

@Component({
    selector: "load",
    templateUrl: 'load-user-info.component.html',
    styleUrls: ['load-user-info.component.css']
})
export class LoadUserComponent implements OnInit{
    @Input() user: User;
    offers: Offer[];
    addedSkill: string;
    allSkils:Skill[];
    isEditing = false;
    isShow : boolean = false;
    isSkills: boolean = false;
    constructor(private offerService : OfferService, 
        private userService: UserService, 
        private authService: AuthenticationService,
        private skillService: SkillService,
        private alertService: AlertService) {}

    ngOnInit(){
        this.userService.GetUserByLogin(this.authService.loginString).subscribe(data => {
            this.user = data;
            console.log('this.user = ' + this.user)});   
     
    }
    onClick(){
        this.isEditing = !this.isEditing;
    }
    onSkills(){
        this.isSkills = !this.isSkills;
    }
    onShowOffer(){
        this.isShow = !this.isShow;
        this.offers = this.offerService.getUserOffers(this.user.id);
    }
    
    addSkill(){
        let skill = new Skill();
        //skill.id = this.user.skills.length + 1;
        skill.name = this.addedSkill;
        this.skillService.addSkill(skill.name).subscribe(data => {
            this.skillService.getAllSkills().subscribe(res => {this.allSkils = res;
                this.userService.updateUserSkills(this.allSkils, this.user.id).subscribe();
                this.ngOnInit();
                this.addedSkill = null;
            });
        });
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