require('../public/vendor/jquery/dist/jquery.min');

var app = require('angular');
var routes = require('./routes');

require('angular-ui-router');
require('angularjs-toaster');

app.module('mean', [
	'ui.router',
	'toaster',
]).config(routes.config).run(routes.run);

require('./directives');
require('./common/mvNotifier');
require('./modules/main');
require('./modules/account');