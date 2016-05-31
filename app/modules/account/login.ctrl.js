var LoginController = function($scope, accountService, myToaster, $location, $state) {
	$scope.user = {};

	getAuthenticated();
	$scope.identity = accountService;
	$scope.signin = signin;
	$scope.signOut = signOut;

	function signin() {
		accountService.authenticate($scope.user)
			.then(function(resp) {
				if(resp.success) {
					accountService.currentUser = resp.data;
					myToaster.notify('success', 'You have successfully signed in!');
				} else {
					myToaster.notify('error', 'Username/Password incorrect credentials.');
				}
			});
	}

	function signOut() {
		accountService.logoutUser().then(function() {
			$scope.user = {};
			accountService.currentUser = undefined;
			myToaster.notify('success', 'You have signed out!');
			$location.path('/login');
		});
	}

	function getAuthenticated() {
		accountService.getAuthenticatedUser()
			.then(function(resp) {
				accountService.currentUser = resp.data;
			});
	}
}

module.exports = LoginController;