const path = require("path"),
	auth = require("./auth");

module.exports = function(app, config) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(config.rootPath + '/public/index.html'));
	});

	app.post("/login", auth.authenticate);
}