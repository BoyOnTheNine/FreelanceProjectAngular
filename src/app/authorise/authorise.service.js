"use strict";
var core_1 = require("@angular/core");
var fake_users_1 = require('../fake-storage/fake-users');
core_1.Injectable();
var AuthoriseService = (function () {
    function AuthoriseService() {
        this.user = undefined;
    }
    AuthoriseService.prototype.CheckUser = function (login, password) {
        this.user = fake_users_1.users.find(function (log) { return log.login == login; });
        return this.user;
    };
    AuthoriseService.prototype.SetUser = function (user) {
        this.user = user;
    };
    AuthoriseService.prototype.LogOutUser = function () {
        this.user = undefined;
    };
    AuthoriseService.prototype.GetUser = function () {
        return this.user;
    };
    AuthoriseService.prototype.findUserByOfferId = function (id) {
    };
    AuthoriseService.prototype.CreateUser = function (user) {
        fake_users_1.users.push(user);
    };
    return AuthoriseService;
}());
exports.AuthoriseService = AuthoriseService;
//# sourceMappingURL=authorise.service.js.map