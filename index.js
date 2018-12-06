var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');


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
 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
   cb(null, path.join(__dirname + '/../public/uploads'))
   },
   filename: function (req, file, cb) {
	 cb( null,file.originalname+Date.now()+".jpg",
	 )
   }
});


let upload = multer({storage: storage, fileFilter: function (req, file, callback) {
	var ext = path.extname(file.originalname);
	if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
		return callback(new Error('Only images are allowed'))
	}
	callback(null, true)
},
limits:{
	fileSize: 1024 * 1024
}});

//using static files
app.use('/uploads/', express.static(path.join(__dirname, '/public/uploads')));
app.use(express.static(__dirname + '/dist/frontend/'));
 
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'POST');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });
 

//using the routes
var api_routes = require('./routes/api.routes.js');
app.use('/api',api_routes);

var routes = require('./routes/routes.js');
app.use('/',routes);



var port = process.env.PORT||3000;

app.listen(port,console.log('Your server available at http://localhost:3000'));
