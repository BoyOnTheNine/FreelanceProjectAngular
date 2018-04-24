import {User} from '../shared/user';
import {Skill} from '../shared/skill';
import {skills} from './fake-Skills';
import {roles} from './fake-roles'


 export var users : User[] =[
     {id: 1,firstName: "Lapickaya",lastName : "Natalia",phoneNumber: "1234567",country: "Belarus",rating: 3.5,
     login: "nagibator",hash: 123,roles: [roles[0]], 
     skills: [skills[3]] },
     {id: 2,firstName: "Ivan",lastName : "Ivanov",phoneNumber: "7654321",country: "Poland",rating: 3.7,
     login: "kurwa",hash: 123,roles: [roles[0]], 
     skills: [skills[0],skills[1]] }
 ]