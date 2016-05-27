var exports = module.exports = {};

exports.config = function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('/', {
			url: '/',
			templateUrl: '/app/includes/layout.html',
			controller: function($scope) {
				console.log("loaded");
				$scope.message = "HELLO WORLD";
			}
		});
}

exports.run = function($state) {
	$state.go('/');
}