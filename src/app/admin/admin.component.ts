import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/skill';
import { Category } from '../shared/category';
import { CategoryService } from '../platform/category.service';
import { SkillService } from '../skill-service/skill.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isCategory: boolean = false;
  isSkill: boolean = false;
  skills: Skill[];
  categories: Category[];
  curCat: string;
  curSkill: string;
  idCat: number;
  idSkill: number;

  constructor(private catServise: CategoryService,private skillServise: SkillService) { }

  ngOnInit() {
   
    this.catServise.getCategories().subscribe(res => this.categories = res)
    this.skillServise.getAllSkills().subscribe(res => this.skills = res )
  }
  
  onOpenCategory(){
    this.isCategory = !this.isCategory;
  }

  onOpenSkill(){
    this.isSkill = !this.isSkill;
  }

  onAddCategory(){
      
        this.catServise.addCategory(this.curCat).subscribe(o => this.isCategory = false);
  }

  onDeleteCategory(){
      this.catServise.deleteCategory(this.idCat).subscribe( o => this.isCategory = false);
  }

  onAddSkill(){
  
    this.skillServise.addSkill(this.curSkill).subscribe(o => this.isSkill = false)

  }

  onDeleteSkill(){
    this.skillServise.deleteSkill(this.idSkill).subscribe(o => this.isSkill = false)
  }

}
