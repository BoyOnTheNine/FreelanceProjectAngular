import { Injectable } from "@angular/core";
import { Category } from '../shared/category';

import { Offer } from '../shared/offer';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { AuthenticationService } from "../authorise/authentication.service";
import { Observable }     from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class CategoryService {
    allCategories: Category[];
    currOff: Offer[];
    private serverUrl: string = 'http://localhost:8080/api/v1';
    constructor(
        private http: HttpClient,
        private authService: AuthenticationService
    ) { }

    updateCategory() {
        this.getCategories().subscribe(categories =>{this.allCategories = categories});
    }

    getCategories(){
        return this.http.get<Category[]>(this.serverUrl + '/categories');
    }


    addCategory(catName: string){
        let body = {
            name:catName,     
        };
        return this.http.post( this.serverUrl + '/categories', body);
    }

    

    deleteCategory(id: Number){
        return this.http.delete(this.serverUrl + '/categories/'+ id);
    }



}

