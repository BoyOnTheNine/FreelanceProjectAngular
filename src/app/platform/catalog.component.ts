import {Component, OnInit} from '@angular/core';
import {Category} from '../shared/category';
import {CategoryService} from './category.service';
import {ActivatedRoute} from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import { OfferService } from '../offer/offer.service';

@Component({
    selector: 'catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.css']
})

export class CatalogComponent implements OnInit{
    categories: Category[];

    constructor(private categoryService: CategoryService,private offServise : OfferService){}

    ngOnInit(){
        this.categoryService.getCategories().subscribe(data => {
             this.categories = data;
             this.offServise.getAllOffers().subscribe(res =>{
                 let offers = res;
                 for (let category of this.categories) {
                         category.offersCount = 0;
                        for (let offer of offers) {
                            let curCat = offer.categories.filter(c => c.id == category.id)
                           category.offersCount += curCat.length;
                         }
                    }
                
             })
            }
            );
    

}
}
