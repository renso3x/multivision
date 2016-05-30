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
}