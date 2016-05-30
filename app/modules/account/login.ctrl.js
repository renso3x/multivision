var LoginController = function($scope, accountService, myToaster) {
	$scope.user = {};

	$scope.signin = function() {
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

	$scope.identity = accountService;

}

module.exports = LoginController;