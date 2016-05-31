var UsersListCtrl = function($scope, myUserService) {
	$scope.users = myUserService.query();
}

module.exports = UsersListCtrl;