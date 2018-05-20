import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service/user.service';
import { OfferService } from '../offer/offer.service';
import { Offer } from '../shared/offer';
import { User } from '../shared/user';
import { Category } from '../shared/category';
import { CategoryService } from '../platform/category.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-offer-create',
  templateUrl: './offer-create.component.html',
  styleUrls: ['./offer-create.component.css']
})
export class OfferCreateComponent implements OnInit {

  categories: Category[];
  user: User;
  offer: any = {};
 

  constructor(private route: ActivatedRoute,private usrServ: UserService, private ofrServ: OfferService, private router: Router,private catServise: CategoryService) { }

  ngOnInit() {
    var id = +this.route.snapshot.params['id'];
    this.usrServ.GetUserById(id).subscribe(data => {this.user = data});
    
    this.getCategories();
   
  }

  private getCategories(){

    this.catServise.getCategories().subscribe(data => this.categories = data);
    
  }


  onCreate(){
    this.offer.customer = this.user;
    this.ofrServ.createOffer(this.offer).subscribe(o => { this.router.navigateByUrl('/userInfo'); });

  }
  

}
