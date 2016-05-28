var MainController = function($scope) {

	$scope.courses = [
		{ name: 'C# for Sociopaths', featured: true, published: new Date()},
		{ name: 'C# for Sociopaths', featured: true, published: new Date()},
		{ name: 'C# for Sociopaths', featured: true, published: new Date()},
		{ name: 'C# for Sociopaths', featured: true, published: new Date()},
		{ name: 'C# for Sociopaths', featured: true, published: new Date()},
		{ name: 'C# for Sociopaths', featured: true, published: new Date()},
		{ name: 'C# for Sociopaths', featured: true, published: new Date()},
		{ name: 'C# for Sociopaths', featured: true, published: new Date()}
	];

	$scope.repeat = function(n) {
		return new Array(n);
	};
}

module.exports = MainController;