import { Component, OnInit, Input } from '@angular/core';
import {OfferService} from '../offer/offer.service';
import { User } from '../shared/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service/user.service';
import { Offer } from '../shared/offer';
import { Category } from '../shared/category';
import { CategoryService } from '../platform/category.service';


@Component({
  selector: 'app-user-offer-activity',
  templateUrl: './user-offer-activity.component.html',
  styleUrls: ['./user-offer-activity.component.css']
})
export class UserOfferActivityComponent implements OnInit {

    offer : Offer;
    categories: Category[];
  constructor(private offServ: OfferService, private route: ActivatedRoute, private catServise : CategoryService, private router : Router) { }

  ngOnInit() {
  var id = +this.route.snapshot.params['id'];
  this.offer = this.offServ.getOfferById(id);
  this.getCategories();
  }

 private getCategories(){

    this.catServise.getCategories().subscribe(data => this.categories = data);
    
  }

  onDelete(){
    this.offServ.deleteOffer(this.offer).subscribe( o =>{ this.router.navigateByUrl('/userInfo'); }) ;
 
  }


  onUppdate(){
      this.offServ.uppdateOffer(this.offer).subscribe( o =>{ this.router.navigateByUrl('/userInfo'); } );
   
  }

}
