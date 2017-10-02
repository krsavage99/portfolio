var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// JS here
app.use(express.static(__dirname + '/src/js'));
// CSS here
app.use(express.static(__dirname + '/src/css'));
// Images here
app.use(express.static(__dirname + '/src/img'));

//renders homepage
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/home.html');
});

//renders about page at localhost:3000/about
app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/views/about.html');
});

app.listen(port);

console.log('Running at Port: ' + port);

//in terminal run "node app.js"
