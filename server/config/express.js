const express = require("express"),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser"),
	session = require('express-session'),
	passport = require("passport");

module.exports = function(app, config) {
	app.use('/static', express.static(config.rootPath + '/public'));
	app.use('/app', express.static(config.rootPath + '/app'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({'extended':'true'}));
	app.use(cookieParser());
	app.use(session({
		secret: 'multi vision unicorns',
		resave: true,
    	saveUninitialized: true
   	}));
	app.use(passport.initialize());
	app.use(passport.session());
}
