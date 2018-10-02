

//simple web server
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello DannySimple\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


//Using a Callback function
var http = require('http');
function responseHandler(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello DawnCallback\n');
}
http.createServer(responseHandler).listen(1338, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1338/');


//Processing QueryString
var http = require('http');
var url = require('url');

function responseHandler2(req, res) {
    var queryData = url.parse(req.url, true).query;
    res.writeHead(200, {"Content-Type": "text/plain"});

    if (queryData.name) {
        // user told us their name in the GET request, ex: http://localhost:1339/?name=Ross
        res.end('Hello ' + queryData.name + '\n');
    } else {
        res.end("Hello World\n");
    }
}

var server = http.createServer(responseHandler2);

server.listen(1339);

console.log('Server running at http://127.0.0.1:1339/');
