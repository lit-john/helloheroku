/**
* Created with Hello Heroku.
* User: lit-john
* Date: 2014-12-19
* Time: 12:17 PM
* To change this template use Tools | Templates.
*/
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});