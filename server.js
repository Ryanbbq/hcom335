// load the things we need
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname + '/public')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});

// bibliography page 
app.get('/bibliography', function(req, res) {
	res.render('pages/bibliography');
});

// movies and book page 
app.get('/movieBooks', function(req, res) {
	res.render('pages/movieBooks');
});

// poetry page
app.get('/poetry',function(req,res){
	res.render('pages/poetry');
});

// technology page
app.get('/technology',function(req,res){
	res.render('pages/technology');
});

// conclusion page
app.get('/conclusion',function(req,res){
	res.render('pages/conclusion');
});

app.listen(process.env.PORT, function() {
  console.log(process.env.IP + ":" +process.env.PORT );
});

module.exports = app;
