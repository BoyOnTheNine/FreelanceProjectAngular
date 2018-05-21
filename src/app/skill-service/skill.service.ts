import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../shared/skill';

@Injectable()
export class SkillService {

    serverUrl: string ='http://localhost:8080/api/v1';

    constructor(private http: HttpClient) { }

    getAllSkills(){
        return this.http.get<Skill[]>(this.serverUrl + '/skills');
    }

    addSkill(skill: string) {
        let body ={
            name:skill
        }
        return this.http.post(this.serverUrl + '/skills', body);
    }

    deleteSkill(id:Number) {
        return this.http.delete( this.serverUrl + '/skills/'+ id);
    }
}
