import {Role} from './role';
import {Skill} from './skill';

export class User{
    id : number;
    firstName: string;
    lastName: string;
    phoneNumber : string;
    country : string;
    rating : number;
    login : string;
    hash : number;
    roles : Role[];
    skills : Skill[];


}