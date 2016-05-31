const mongoose = require("mongoose"),
	crypto = require("crypto");

module.exports = function(config) {
	mongoose.connect(config.db);
	const db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error'));
	db.once('open', function() {
		console.log("connected!");
	});

	const userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		username: String,
		salt: String,
		hashed_pwd: String,
		roles: [String]
	});

	userSchema.methods = {
		authenticate: function(passwordToMatch) {
			return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
		}
 	}

	const User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			let salt, hash;

			salt = createSalt();
			hash = hashPwd(salt , 'enso');
			User.create({
				firstName: 'romeo',
				lastName: 'enso',
				username: 'romeo',
				salt: salt,
				hashed_pwd: hash,
				roles: ['admin']
			});

			salt = createSalt();
			hash = hashPwd(salt , 'enso');
			User.create({
				firstName: 'raymund',
				lastName: 'enso',
				username: 'raymund',
				salt: salt,
				hashed_pwd: hashPwd,
				roles: []
			});

			salt = createSalt();
			hash = hashPwd(salt , 'enso');
			User.create({
				firstName: 'richard',
				lastName: 'enso',
				username: 'richard',
				salt: salt,
				hashed_pwd: hash
			});
		}
	});

	function createSalt() {
		return crypto.randomBytes(128).toString('base64');
	}

	function hashPwd(salt, pwd) {
		//hash message authentication code
		const hmac = crypto.createHmac('sha1', salt);
		return hmac.update(pwd).digest('hex');
	}
}