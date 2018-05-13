import { Injectable } from "@angular/core";
import { Offer } from "../shared/offer";
import {offers} from "../fake-storage/fake-offers"
import { User } from "../shared/user";
import {CategoryService} from '../platform/category.service';
import { Category } from "../shared/category";
import { Http, Headers, RequestOptions, Response} from "@angular/http";
import { AuthenticationService } from "../authorise/authentication.service";
import { Observable }     from 'rxjs/Observable';



@Injectable()
export class OfferService{
  
    allOffers: Offer[];
    CatService: CategoryService;
    
    constructor(private http: Http, private authService: AuthenticationService){}

    getUserOffers(user: User) : Offer[] {
      this.updateOffers();
       return this.allOffers.filter(ofr => ofr.user.id == user.id);
    }

    updateOffers(){
        this.allOffers = offers;
    }

    getAllOffers() : Observable<Offer[]>{
        // this.updateOffers();
        // return this.allOffers;
        let headers = new Headers({'Authorization':'Bearer ' + this.authService.token
        });
        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:8080/api/v1/offers', options)
        .map((response: Response) =>response.json());
    }

    findOffer(id: number) : Offer[]{
        this.updateOffers();
       
        return this.allOffers.filter(off => off.category.find(c => c.id == id));
    }

    getCatalogNameById(id: Number): string{
          return 'lol';
        
    }

    getOfferById(id : Number): Offer{
          this.updateOffers();
          return this.allOffers.find(off => off.id == id);
    }

   

}