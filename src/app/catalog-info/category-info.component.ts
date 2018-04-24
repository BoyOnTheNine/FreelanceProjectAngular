import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Offer} from '../shared/offer';
import { OfferService } from '../offer/offer.service';

    
@Component({
    selector: 'category-info',
    templateUrl: 'category-info.component.html'
  
})

export class CategoryInfoComponent implements OnInit  { 
    
    objOffers: Offer[] = undefined;
    categoryName: string;

    constructor(private route: ActivatedRoute, private offService: OfferService){}

    ngOnInit(){
       var id = +this.route.snapshot.params['id'];
       this.getOffer(id);
    
    }

    getOffer(Id: number){
        this.objOffers = this.offService.findOffer(Id);
    }

    getCatName(Id: number){
        this.categoryName = this.offService.getCatalogNameById(Id);
    }

}