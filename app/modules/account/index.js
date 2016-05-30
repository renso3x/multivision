var app = require('angular').module('mean');
var LoginController = require('./login.ctrl');
var accountService = require('./account.service');

LoginController.$inject = ['$scope', 'accountService', 'mvNotifier'];
app.controller('LoginController', LoginController);

accountService.$inject = ['$http', '$q'];
app.service('accountService', accountService);