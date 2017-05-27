// Lesson 1 - Hellow World apps

// var express = require('express');
// var app= express();
// var port= process.argv[2];

// app.get('/home', function(req,res) {
// 	res.end('Hello World!');
// })

// app.listen(port);


// =======================================
// Lesson 2 - satic data

// var express 	= require('express');
// var app 		= express();
// var port 		= process.argv[2];
// var filenaem 	= process.argv[3];

// app.use(express.static('public'));

// app.listen(port);



// =========================================
// Lesson 3 - PUG 


// var express 	= require('express');
// var app 		= express();
// var port 		= process.argv[2];
// var viewpath	= process.argv[3];

// app.set('views', viewpath);
// app.set( 'view engine', 'pug');

// app.get('/home', function(req,res) {
// 	res.render('index',{date: new Date().toDateString()});
// })

// app.listen(port);



// =========================================
// tes dengan postman dengan body form-url-encode
// key str : value bebas di isi
// Lesson 4 -  OLD FORM

var express 	= require('express');
var bodyParser	= require('body-parser');
var app 		= express();
var port 		= process.argv[2];

app.use(bodyParser.urlencoded({extended:false}))
app.set('views','view');
app.set( 'view engine', 'pug');

app.get('/form', function(req,res) {
	res.render('index');
})

app.post('/form', function(req,res) {
	res.end(req.body.str.split('').reverse().join(''));
})

app.listen(port)

















