var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer( (req, res) => {
    var q = url.parse(req.url, true); // true argument makes parse return object instead of string
    var filename = q.pathname == "/" ? "./index.html" : "." + q.pathname;
    fs.readFile(filename, (err, data) => {
        if (err) {
            fs.readFile("./404.html", (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/html'});
                    return res.end("Something went wrong, please try again.");
                }
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);