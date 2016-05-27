const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


if(app.get('env') === 'development') {
	app.use('/static', express.static(__dirname + '/public'));
	app.use('/app', express.static(__dirname + '/app'));

	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
	app.use(bodyParser.json());                                     // parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	app.use(methodOverride());

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + '/public/index.html'));
	});

	app.listen('9090', function() {
		console.log("App launch in port: 9090!");
	});
}