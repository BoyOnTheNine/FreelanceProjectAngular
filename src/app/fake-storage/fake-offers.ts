import {Offer} from '../shared/offer';
import {categorys} from './fake-category'
import {users} from './fake-users'

export var offers : Offer[] = [
    {id:1,price: 300,date: "2017-03-01",description: " Create course work on .Net",name: ".Net programming",
        category: [categorys[0]],user:users[1] },
    {id:2,price: 500,date: "2018-03-01",description: " Create mega front on Angular",name: "JS programming",
        category: [categorys[0],categorys[2]],user:users[1] },
    {id:3,price: 100,date: "2018-03-01",description: " Wash all university",name: "Washing",
        category: [categorys[1]],user:users[0] }
]