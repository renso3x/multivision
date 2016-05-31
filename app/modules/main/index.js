var app = require('angular').module('mean');
var MainController = require('./main.ctrl.js');

MainController.$inject = ['$scope'];
app.controller('MainController', MainController);