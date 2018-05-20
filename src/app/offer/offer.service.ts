import { Injectable, OnInit } from "@angular/core";
import { Offer } from "../shared/offer";
import { User } from "../shared/user";
import {CategoryService} from '../platform/category.service';
import { Category } from "../shared/category";
//import { Http, Headers, RequestOptions, Response} from "@angular/http";
import { AuthenticationService } from "../authorise/authentication.service";
import { Observable }     from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";



@Injectable()
export class OfferService implements OnInit{
    allOffers: Offer[];

    constructor(private http: HttpClient, 
        private authService: AuthenticationService,
        private categoryService: CategoryService
    ){ }

    ngOnInit(){
        this.getAllOffers();
    }

    getUserOffers(offers : Offer[],user: User) : Offer[] {
   
       return offers.filter(ofr => ofr.user.id == user.id);
    }

    updateOffers(){
        // this.allOffers = offers;
    }

    getAllOffers(){
        // this.updateOffers();
        // return this.allOffers;
        return this.http.get<Offer[]>('http://localhost:8080/api/v1/offers');
    }

    findOffer(id: number):Offer[]{
        this.getAllOffers().subscribe(res => this.allOffers = res);
        this.categoryService.updateCategory();
        return this.allOffers;
    }

    getCatalogNameById(id: Number): string{
        return this.categoryService.allCategories.find(o => o.id == id).name;
    }

    getOfferById(id : Number): Offer{
          this.getAllOffers().subscribe(res => this.allOffers = res);
          return this.allOffers.find(off => off.id == id);
    }

   

}