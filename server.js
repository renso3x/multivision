const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");


if(app.get('env') === 'development') {
	// mongoose.connect('mongodb://localhost/multivision');
	app.listen('9090', function() {
		console.log("App launch in port: 9090!");
	});
} else {
	// mongoose.connect('mongodb://multivision:multivision@ds017173.mlab.com:17173/multivision');
}

app.use('/static', express.static(__dirname + '/public'));
app.use('/app', express.static(__dirname + '/app'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});
