import { Injectable } from "@angular/core";
import {Category} from '../shared/category';
import {categorys} from '../fake-storage/fake-category';
import {OfferService} from '../offer/offer.service';
import {Offer} from '../shared/offer';


@Injectable()
export class CategoryService{
    allCategorys: Category[];

    constructor(private offServ: OfferService){}

    updateCategory(){
        this.allCategorys = categorys;
    }

    getCategorys(){
        this.updateCategory();
        this.countOffersForCategory();
        return this.allCategorys;
    }

    private countOffersForCategory(){
        let currOff = this.offServ.getAllOffers();
        for(let category of this.allCategorys ){
            category.offersCount = 0;
             for(let offer of currOff){
                 let curCat = offer.category.filter(c => c.id == category.id)
                 category.offersCount += curCat.length;
             }
        }
    }
}