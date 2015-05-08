var http = require('http'); // Module

http.createServer(function(req, res){

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');

}).listen(2040, '127.0.0.1');

console.log('Server is running at 127.0.0.1');