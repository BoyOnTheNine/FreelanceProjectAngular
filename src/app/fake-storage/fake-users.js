"use strict";
var fake_Skills_1 = require('./fake-Skills');
var fake_roles_1 = require('./fake-roles');
exports.users = [
    { id: 1, firstName: "Lapickaya", lastName: "Natalia", phoneNumber: "1234567", country: "Belarus", rating: 3.5,
        login: "nagibator", hash: 123, roles: [fake_roles_1.roles[0]],
        skills: [fake_Skills_1.skills[3]] },
    { id: 2, firstName: "Ivan", lastName: "Ivanov", phoneNumber: "7654321", country: "Poland", rating: 3.7,
        login: "kurwa", hash: 123, roles: [fake_roles_1.roles[0]],
        skills: [fake_Skills_1.skills[0], fake_Skills_1.skills[1]] }
];
//# sourceMappingURL=fake-users.js.map