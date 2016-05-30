var accountService = function($http, $q) {
	return {
		authenticate: authenticate,
		currentUser: undefined,
		isAuthenticated: isAuthenticated
	}

	function isAuthenticated() {
		return !!this.currentUser;
	}

	function authenticate(user) {
		var dfd = $q.defer();

	 	$http.post('/login', user).then(function(resp) {
	 		if(resp.data.success) {
				dfd.resolve({success: true, data: resp.data.user});
			} else {
				dfd.resolve({success: false});
			}
	 	});

	 	return dfd.promise;
	}
}

module.exports = accountService;