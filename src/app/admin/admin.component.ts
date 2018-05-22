import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/skill';
import { Category } from '../shared/category';
import { CategoryService } from '../platform/category.service';
import { SkillService } from '../skill-service/skill.service';
import { ThrowStmt } from '@angular/compiler';
import { UserService } from '../user-service/user.service';
import { User } from '../shared/user';
import { SenderService } from './sender.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isCategory: boolean = false;
  isSkill: boolean = false;
  isSend: boolean = false;
  skills: Skill[];
  categories: Category[];
  users: User[];
  curCat: string;
  curSkill: string;
  idCat: number;
  idSkill: number;
  mailText: string;
  receiver: string;
  subject: string;

  constructor(private catServise: CategoryService,private skillServise: SkillService, private usrServ: UserService, private sendServ: SenderService) { }

  ngOnInit() {
   
    this.catServise.getCategories().subscribe(res => this.categories = res)
    this.skillServise.getAllSkills().subscribe(res => this.skills = res )
    this.usrServ.GetAll().subscribe(res => this.users = res);
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

  onOpenSend(){
    this.isSend = !this.isSend;
  }

  onSend(){
      if(this.receiver === "Broadcast")
        {
          this.sendServ.sendAll(this.subject,this.mailText).subscribe(o => this.isSend = !this.isSend);
        }
      else{
            this.sendServ.sendUser(this.receiver,this.subject,this.mailText).subscribe(o => this.isSend = !this.isSend);
         }
  }

}
