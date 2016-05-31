var accountService = function($http, $q, myUserService) {
	return {
		currentUser: undefined,
		isAuthenticated: isAuthenticated,
		getAuthenticatedUser: getAuthenticatedUser,
		isAuthorized: isAuthorized,
		authorizedCurrentUser: authorizedCurrentUser,
		authenticate: authenticate,
		logoutUser: logoutUser
	}

	function authorizedCurrentUser(role) {
		if(this.isAuthorized(role)) {
			return true
		} else {
			return $q.reject('not authorized');
		}
	}

	function isAuthorized(role) {
		return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
	}

	function getAuthenticatedUser() {
		var dfd = $q.defer();

		$http.get('/sessionUser').then(function(resp) {
			dfd.resolve(resp);
		});

		return dfd.promise;
	}

	function logoutUser() {
		var dfd = $q.defer();

		$http.post('/logout', {logout: true}).then(function() {
			dfd.resolve();
		});

		return dfd.promise;
	}

	function isAuthenticated() {
		return !!this.currentUser;
	}

	function authenticate(user) {
		var dfd = $q.defer();

	 	$http.post('/login', user).then(function(resp) {
	 		if(resp.data.success) {
	 			var user = new myUserService();
	 			angular.extend(user, resp.data.user);
				dfd.resolve({success: true, data: user});
			} else {
				dfd.resolve({success: false});
			}
	 	});

	 	return dfd.promise;
	}
}

module.exports = accountService;