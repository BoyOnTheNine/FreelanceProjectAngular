import { Component, Input, DoCheck, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Offer } from '../shared/offer';
import { Skill } from '../shared/skill';
import { OfferService } from '../offer/offer.service';
import { UserService } from '../user-service/user.service';
import { AuthenticationService } from '../authorise/authentication.service';
import { AlertService } from '../alert-service/alert.service';
import { SkillService } from '../skill-service/skill.service';
import { Router } from '@angular/router';

@Component({
    selector: "load",
    templateUrl: 'load-user-info.component.html',
    styleUrls: ['load-user-info.component.css']
})
export class LoadUserComponent implements OnInit {
    @Input() user: User;
    offers: Offer[];
    addedSkill: string;
    allSkils: Skill[];
    selectedSkill: string;
    delArray: Number[] = [];
    isEditing = false;
    isShow: boolean = false;
    isSkills: boolean = false;
    constructor(private offerService: OfferService,
        private userService: UserService,
        private authService: AuthenticationService,
        private skillService: SkillService,
        private alertService: AlertService,
    private router: Router) { }

    ngOnInit() {
        this.userService.GetUserByLogin(this.authService.loginString).subscribe(data => {
            this.user = data;
            console.log('this.user = ' + this.user)
        });
        this.skillService.getAllSkills().subscribe(res => this.allSkils = res);
    }

    changeSelectedSkill(newSkill: string) {
        this.selectedSkill = newSkill;
    }

    deleteSelectedOffers(){
        this.offerService.deleteSelectedOffers(this.delArray).subscribe(o => { this.router.navigateByUrl('/userInfo'); });
    }

    onClick() {
        this.isEditing = !this.isEditing;
    }
    onSkills() {
        this.isSkills = !this.isSkills;
    }
    onShowOffer() {
        this.isShow = !this.isShow;
        this.offers = this.offerService.getUserOffers(this.user.id);
    }

    addSkill() {
        let skill = new Skill();
        skill.name = this.selectedSkill;
        let skillArr = new Array<Skill>();
        skillArr.push(this.allSkils.find(exp => exp.name == skill.name));
        this.userService.updateUserSkills(skillArr, this.user.id).subscribe(hell => {
            this.userService.GetUserByLogin(this.authService.loginString).subscribe(data => {
                this.user = data;
                console.log('this.user = ' + this.user)
            });
        });

        this.addedSkill = null;
    }

    checkbox(id: Number) {
        if (this.delArray.find(x => x == id)) {
            this.delArray.splice(this.delArray.indexOf(id), 1)
        }
        else {
            this.delArray.push(id);
        }
        console.log(this.delArray);
    }

    saveChanges() {
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