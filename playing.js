//Processing QueryString
var http = require('http');
var url = require('url');
var fs = require('fs');


//playing with passing a querystring
function responseHandler2(req, res) {
    var queryData = url.parse(req.url, true).query;
    res.writeHead(200, {"Content-Type": "text/plain"});

    if (queryData.name) {
        // user told us their name in the GET request, ex: http://localhost:1339/?name=Ross
        console.log("parameter="+queryData.name);
        res.end('Hello ' + queryData.name + '\n');
    } else {
        console.log("no parameter was passed");
        res.end("Hello World\n");
    }
}
var server = http.createServer(responseHandler2);
server.listen(1339);
console.log('Server running at http://127.0.0.1:1339/');


//playing with serving a file
var ROOT_DIR = "html/";
var port = process.env.port || 1337
http.createServer(function (req2, res2) {
    var urlObj = url.parse(req2.url, true, false);
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
        if (err) {
            console.log('write an error')
            res2.writeHead(404);
            res2.end(JSON.stringify(err));
            return;
        }
        console.log('serving up a html file')
        res2.writeHead(200);
        res2.end(data);
    });
}).listen(port);
console.log('Server running at http://127.0.0.1:1337/');
