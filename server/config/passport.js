const mongoose = require("mongoose"),
	passport = require("passport"),
	LocalStrategy = require("passport-local").Strategy;

module.exports = function() {
	const User = mongoose.model('User');
	passport.use(new LocalStrategy(
		function(username, password, done) {
			User.findOne({username: username}).exec((err, user) => {
				if(user && user.authenticate(password)) {
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
}