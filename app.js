var express = require("express");
var app = express();

// JS here
app.use(express.static(__dirname + '/src/js'));
// CSS here
app.use(express.static(__dirname + '/src/css'));
// Images here
app.use(express.static(__dirname + '/src/img'));


//renders homepage
app.get('/',function(req,res){
  res.sendFile(__dirname+'/views/home.html');
});

//renders about page at localhost:3000/about
app.get('/about',function(req,res){
  res.sendFile(__dirname+'/views/about.html');
});

app.listen(3000);

console.log("Running at Port 3000");

//in terminal run "node app.js"
