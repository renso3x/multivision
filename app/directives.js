var app = require("angular");

app.module('mean')
	.directive('styleSheets', styleSheets)

function styleSheets() {
	return {
		restrict: 'EA',
		templateUrl: '/app/includes/styles.html',
	}
}