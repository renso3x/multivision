var exports = module.exports = {};

exports.config = function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('/', {
			url: '/',
			templateUrl: '/app/includes/layout.html',
			controller: 'MainController'
		})
}

exports.run = function($state) {
	$state.go('/');
}