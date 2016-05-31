const express = require("express"),
	app = express();

const config = require('./server/config/config')[app.get('env')];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')(config);

require('./server/config/routes')(app, config);

app.listen(config.port, function() {
	console.log("App launch in port " + config.port);
});

