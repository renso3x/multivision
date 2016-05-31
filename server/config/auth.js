const passport = require("passport");

exports.authenticate = (req, res, next) => {
	const auth = passport.authenticate('local', (err, user) => {
		if(err) return next(err);

		if(!user) {
			res.send({success:false})
		}

		req.logIn(user, (err) => {
			if(err) {
				return next(err)
			}
			res.send({ success: true, user: user });
		})
	});
	auth(req, res, next);
};

exports.signout = (req, res) => {
	req.logout();
	res.end();
};

exports.requiresRole = function(role) {
	return function(req, res, next) {
		if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
			res.sendStatus(403);
			res.end();
		} else {
			next();
		}
	}
}