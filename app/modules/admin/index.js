var app = require('angular').module('mean');
var UsersListCtrl = require('./UsersListCtrl');
var myUserService = require('../account/myUserService');

UsersListCtrl.$inject = ['$scope', 'myUserService'];
app.controller('UsersListCtrl', UsersListCtrl);