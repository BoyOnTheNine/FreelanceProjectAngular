import {User} from './user';
import {Category} from './category';

export class Offer{

    id : number;
    description: string;
    name: string;
    price: number;
    user: User;
    date: string;
    category: Category[];



}