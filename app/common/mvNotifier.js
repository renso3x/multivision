var app = require('angular');

app.module('mean')
	.factory('mvNotifier', mvNotifier);

mvNotifier.$inject = ['toaster'];

function mvNotifier(toaster) {
	return {
		notify: function(type, msg) {
			toaster.pop(type, msg);
		}
	}
}