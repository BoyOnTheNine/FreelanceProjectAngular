import { Injectable } from "@angular/core";
import { Category } from '../shared/category';
import { categorys } from '../fake-storage/fake-category';
import { Offer } from '../shared/offer';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { AuthenticationService } from "../authorise/authentication.service";
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class CategoryService {
    allCategories: Category[];
    currOff: Offer[];
    constructor(
        private http: Http,
        private authService: AuthenticationService
    ) { }

    updateCategory() {
        this.getCategories().subscribe(categories =>{this.allCategories = categories});
    }

    getCategories(): Observable<Category[]> {
        // this.updateCategory();
        // this.countOffersForCategory();
        // return this.allCategorys;
        let headers = new Headers({'Authorization':'Bearer ' + this.authService.token
        });
        let options = new RequestOptions({headers:headers});
        return this.http.get('http://localhost:8080/api/v1/categories', options)
        .map((response: Response) =>response.json());
    }

    private countOffersForCategory() {

        // this.offServ.getAllOffers().subscribe(currOff => {
        //     this.currOff = currOff;
        //     console.log('this.currOff = ' + this.currOff);
        // });
        // for (let category of this.allCategories) {
        //     category.offersCount = 0;
        //     for (let offer of this.currOff) {
        //         let curCat = offer.categories.filter(c => c.id == category.id)
        //         category.offersCount += curCat.length;
        //     }
        // }
    }
}