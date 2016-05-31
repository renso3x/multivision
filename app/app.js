window.$ = window.jQuery = require('jquery');
require('../public/vendor/bootstrap/dist/js/bootstrap.min');

var app = require('angular');
var routes = require('./routes');

require('angular-ui-router');
require('angularjs-toaster');
require('angular-resource');

app.module('mean', [
	'ui.router',
	'toaster',
	'ngResource'
]).config(routes.config).run(routes.run);

require('./directives');
require('./common/mvNotifier');
require('./modules/main');
require('./modules/account');
require('./modules/admin');