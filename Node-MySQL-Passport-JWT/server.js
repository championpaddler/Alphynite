require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session  = require('express-session');
var morgan = require('morgan');
var app = express();
var port     = process.env.PORT || 5555;
var passport = require('passport');
var flash    = require('connect-flash');
var http = require('http');


// config passport and connect to DB
require('./config/passport')(passport);

// set up express
app.use(morgan('dev'));

app.use('/uploads/', express.static(path.join(__dirname, './app/public/uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
// config passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



const SERVER_SECRET = 'ohgodpleasenobug';

// routes
require('./app/routes.js')(app, passport, SERVER_SECRET); // load our routes and pass in our app and fully configured passport

// Create server
http.createServer( app).listen(port, function(){
	console.log('Server listening on port ' + port);
});
