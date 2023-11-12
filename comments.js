// Create a web server

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var resp = "Hello World\n";
  res.end(resp);
}).listen(8080);