var app = require('angular').module('mean');
var LoginController = require('./login.ctrl');
var accountService = require('./account.service');
var myUserService = require('./myUserService');

LoginController.$inject = ['$scope', 'accountService', 'mvNotifier', '$location', '$state'];
app.controller('LoginController', LoginController);

accountService.$inject = ['$http', '$q', 'myUserService'];
app.service('accountService', accountService);

myUserService.$inject = ['$resource']
app.service('myUserService', myUserService);