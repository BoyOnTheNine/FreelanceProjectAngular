import {Component, OnInit} from '@angular/core';
import {Category} from '../shared/category';
import {CategoryService} from './category.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.css']
})

export class CatalogComponent implements OnInit{
    categorys: Category[];

    constructor(private categoryService: CategoryService){}

    ngOnInit(){
        this.categorys =  this.categoryService.getCategorys();
    }

}
