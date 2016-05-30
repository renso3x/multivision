const express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	passport = require("passport"),
	LocalStrategy = require("passport-local").Strategy;

const config = require('./server/config/config')[app.get('env')];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

const User = mongoose.model('User');

passport.use(new LocalStrategy(
	function(username, password, done) {

		User.findOne({username: username}).exec((err, user) => {
			if(user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}
));

passport.serializeUser(function(user, done) {
	if(user) {
		done(null, user._id);
	}
});

passport.deserializeUser(function(id, done) {
	User.findOne({_id: id}).exec(function(err, user) {
		if(user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	});
});

require('./server/config/routes')(app, config);

app.listen(config.port, function() {
	console.log("App launch in port " + config.port);
});

