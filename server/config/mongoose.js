const mongoose = require("mongoose");

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
		username: String
	});

	const User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			User.create({
				firstName: 'romeo',
				lastName: 'enso',
				username: 'romeo'
			});
			User.create({
				firstName: 'raymund',
				lastName: 'enso',
				username: 'raymund'
			});

			User.create({
				firstName: 'richard',
				lastName: 'enso',
				username: 'richard'
			});
		}
	})
}