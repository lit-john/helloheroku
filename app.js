/**
* Created with Hello Heroku.
* User: lit-john
* Date: 2014-12-19
* Time: 12:17 PM
* To change this template use Tools | Templates.
*/
var http = require('http');

var server = http.createServer(function(request, response){
   response.writeHead(200, {'Content-type' : 'text/html'});
   response.end("<html><body><h1>Hello Heroku</h1></body></html>");
});

server.listen(3000);