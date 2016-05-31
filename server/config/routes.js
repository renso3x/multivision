const path = require("path"),
	auth = require("./auth"),
	mongoose = require("mongoose"),
	User = mongoose.model('User');

module.exports = function(app, config) {

	app.get('/api/users', auth.requiresRole('admin'), function(req, res) {
		User.find({}).exec(function(err, collection) {
			res.send(collection);
		});
	});

	app.get("/", function(req, res) {
		res.sendFile(path.join(config.rootPath + '/public/index.html'));
	});

	app.get('/sessionUser', function(req, res) {
		res.json(req.user);
	});

	app.post("/login", auth.authenticate);

	app.post("/logout", auth.signout);
}