import {Role} from './role';
import {Skill} from './skill';

export class User{


    constructor(public id : number,
       public firstName: string,
       public lastName: string,
       public phoneNumber : string,
       public country : string,
       public rating : number,
       public login : string,
       public hash : number,
       public roles : Role[],
       public skills : Skill[]){}


}