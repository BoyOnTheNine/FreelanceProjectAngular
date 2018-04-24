import { Injectable } from "@angular/core";
import { Offer } from "../shared/offer";
import {offers} from "../fake-storage/fake-offers"
import { User } from "../shared/user";
import {CategoryService} from '../platform/category.service';
import { Category } from "../shared/category";


@Injectable()
export class OfferService{
  
    allOffers: Offer[];
    CatService: CategoryService;
   

    getUserOffers(user: User) : Offer[] {
      this.updateOffers();
       return this.allOffers.filter(ofr => ofr.user.id == user.id);
    }

    updateOffers(){
        this.allOffers = offers;
    }

    getAllOffers() : Offer[]{
        this.updateOffers();
        return this.allOffers;
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