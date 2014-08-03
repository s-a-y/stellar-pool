// Run app
var connect = require('connect');
var serveStatic = require('serve-static');
var port = Number(process.env.PORT || 5000);
connect().use(serveStatic(__dirname)).listen(port);