var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello someone\n');
}).listen(53);
console.log('Server running at 53');