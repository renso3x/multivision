var exports = module.exports = {};

exports.config = function($stateProvider, $urlRouterProvider) {
	var routRoleCheck = {
		admin: function(accountService, $q) {
			return accountService.authorizedCurrentUser('admin');
		}
	};

	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('app', {
			url: '/',
			templateUrl: '/app/includes/layout.html',
		})
		.state('app.login', {
			url:'login',
			views: {
				'page_content': {
					templateUrl: '/app/includes/front.html',
					controller: 'MainController'
				}
			}
		})
		.state('app.adminUsers', {
			url: 'admin/users',
			resolve: {
				auth: routRoleCheck.admin
			},
			views: {
				'page_content': {
					templateUrl: '/app/views/user-list.html',
					controller: 'UsersListCtrl'
				}
			}
		})
}

exports.run = function($rootScope, $location, $state) {
	$location.path('/login');
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
		if(error === 'not authorized') {
			$location.path('/login');
		}
	});
}