import {Component, OnInit} from '@angular/core';
import {Category} from '../shared/category';
import {CategoryService} from './category.service';
import {ActivatedRoute} from '@angular/router';
import { Observable }     from 'rxjs/Observable';

@Component({
    selector: 'catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.css']
})

export class CatalogComponent implements OnInit{
    categories: Category[];

    constructor(private categoryService: CategoryService){}

    ngOnInit(){
        this.categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
            console.log('this.categories = ' + this.categories)});
    }

}
