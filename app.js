var restify = require('restify');

var server = restify.createServer();

server.get(/.*/, restify.serveStatic({
    'directory': './public/',
    'default': 'index.html'
}));

server.listen(8124, function() {
   console.log('Listening from 8124');
});