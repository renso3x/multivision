var app = require("angular");

app.module('mean')
	.directive('stylesheets', stylesheets)
	.directive('dropdownToggle', dropdownToggle)

function stylesheets() {
	return {
		restrict: 'EA',
		templateUrl: '/app/includes/styles.html',
	}
}

function dropdownToggle() {
	return {
		restrict: 'EA',
		link: function(scope, elem, attrs) {
			elem.dropdown();
		}
	}
}

