// go to http://127.0.0.1:3000/ and you'll see "Hello Word" displayed
// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// creates server at port 8080, "Hello World!" will be displaied at http://localhost:8080
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'}); // 200 is the status code for OK
//   res.end('Hello World!');
// }).listen(8080);

// Example file server at http://localhost:8080
// this will work for html too, just change the Content-Type to text/html
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('Images/event_loop.png', function(err, data) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(data);
    return res.end();
  });
}).listen(8080);