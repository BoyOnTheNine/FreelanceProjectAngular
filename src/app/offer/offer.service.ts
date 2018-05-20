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
    offerUrl: string ='http://localhost:8080/api/v1';

    constructor(private http: HttpClient, 
        private authService: AuthenticationService,
        private categoryService: CategoryService
    ){ }

    ngOnInit(){
        this.getAllOffers();
    }

    getUserOffers(id: number) : Offer[] {
        this.getAllOffers().subscribe(data => this.allOffers = data);
       let newOff = this.allOffers.filter(ofr => ofr.customer.id === id);
       return newOff;
    }

    updateOffers(){
        // this.allOffers = offers;
    }

    getAllOffers(){
        // this.updateOffers();
        // return this.allOffers;
        return this.http.get<Offer[]>(this.offerUrl + '/offers');
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

    uppdateOffer(offer : Offer){
        let body = {
            name:offer.name, 
            description:offer.description,
            date:offer.date,
            price:offer.price,
            categories:offer.categories,
            customer:offer.customer
        };
        return this.http.put( this.offerUrl + '/offers/'+offer.id, body);
    }

    createOffer(offer: any){
        let body = {
            name:offer.name, 
            description:offer.description,
            date:offer.date,
            price:offer.price,
            categories:offer.categories,
            customer:offer.customer
        };
        return this.http.post( this.offerUrl + '/offers', body);
    }

    deleteOffer(offer: Offer){
      
        return this.http.delete( this.offerUrl + "/offers/"+ offer.id);
    }


   

}