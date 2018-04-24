"use strict";
var fake_category_1 = require('./fake-category');
var fake_users_1 = require('./fake-users');
exports.offers = [
    { id: 1, price: 300, date: "2017-03-01", description: " Create course work on .Net", name: ".Net programming",
        category: [fake_category_1.categorys[0]], user: fake_users_1.users[1] },
    { id: 2, price: 500, date: "2018-03-01", description: " Create mega front on Angular", name: "JS programming",
        category: [fake_category_1.categorys[0], fake_category_1.categorys[2]], user: fake_users_1.users[1] },
    { id: 3, price: 100, date: "2018-03-01", description: " Wash all university", name: "Washing",
        category: [fake_category_1.categorys[1]], user: fake_users_1.users[0] }
];
//# sourceMappingURL=fake-offers.js.map