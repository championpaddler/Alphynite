var express = require('express');
var bcrypt= require('bcrypt');
var path = require('path');

var msg91 = require("msg91")("197611ACBvIjqJZM5a7ed724","AAYYUU", "4" );

var app = express();
var multer = require('multer');
var bodyParser = require('body-parser');


//middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET','POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
 

//using static files
app.use('/uploads/', express.static(path.join(__dirname, '/public/uploads')));
app.use(express.static(__dirname + '/dist/frontend/'));
 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 

//usign the routes
var api_routes = require('./routes/api.routes.js');
app.use('/api',api_routes);

var routes = require('./routes/routes.js');
app.use('/',routes);



var port = process.env.PORT||3000;

app.listen(port,console.log('Your server available at http://localhost:3000'));
