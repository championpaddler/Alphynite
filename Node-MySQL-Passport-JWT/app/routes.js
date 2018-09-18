module.exports = function(app, passport, SERVER_SECRET) {




  var bcrypt= require('bcrypt');
  var path = require('path')
  
  var msg91 = require("msg91")("197611ACBvIjqJZM5a7ed724","AAYYUU", "4" );
  
  var multer = require('multer');
  var bodyParser = require('body-parser');
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET','POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
   
  // app.use(function(req, res, next) {
  // 	res.setHeader("Access-Control-Allow-Origin", "*");
    
  // 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  // 	res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    
  // 	next();
  // 	});
  
  
  
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
     cb(null, path.join(__dirname + '/public/uploads'))
     },
     filename: function (req, file, cb) {
     cb( null,file.originalname+Date.now()+".jpg",
     
     
     )
     }
  })
  
  
  
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
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
 
   
  app.post('/api/upload',upload.single('photo'), function (req, res,err) {
      if (!req.file) {
          console.log("No file received");
          return res.send({
            success: false
          });
      
        } else {
          console.log("finally");
          console.log(req.file.filename)
          console.log('file received');
          console.log()
          return res.send(JSON.stringify([{
            "success": true,
            "fileurl":req.file.filename
          }]))
        }
       
  });
   
    
  
    
  
 
  
  
  
  app.post("/api/signup/",function(req,res){
  
    console.log(req.body[0]['data']['Phone']);
    
  
    const saltRounds = 10;
    bcrypt.hash(req.body[0]['data']['Phone'], saltRounds, function(err, hash) {
      console.log(hash);
    res.status(200).send({"hash":String(hash)});
      });
    
    })
    
  
    app.post("/api/product",function(req,res){
  
      console.log("got")
    console.log(req.body);
      
    res.send(["Done"])
      })
  
  
    
    
  
      app.get('/',function(req,res){
        res.send("fghdfyu")
      })
  
  // app.listen(3000,console.log("Serve started"));



















  


  // default message
  app.get('/', function (req, res) {
    res.send('<html><body><p>Welcome to the database</p></body></html>');
  });

// =========== authenticate login info and generate access token ===============

  app.post('/login', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
      if (err) { return next(err); }
      // stop if it fails
      if (!user) { return res.json({ message: 'Invalid Username of Password' }); }

      req.logIn(user, function(err) {
        // return if does not match
        if (err) { return next(err); }

        // generate token if it succeeds
        const db = {
          updateOrCreate: function(user, cb){
            cb(null, user);
          }
        };
        db.updateOrCreate(req.user, function(err, user){
          if(err) {return next(err);}
          // store the updated information in req.user again
          req.user = {
            id: user.username
          };
        });

        // create token
        const jwt = require('jsonwebtoken');
        req.token = jwt.sign({
          id: req.user.id,
        }, SERVER_SECRET, {
          expiresIn: 1200
        });

        // lastly respond with json
        return res.status(200).json({
          user: req.user,
          token: req.token
        });
      });
    })(req, res, next);
  });

// =============================================================================

// ==================== Allows users to create accounts ========================

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/signup/successjson',
    failureRedirect : '/signup/failurejson',
    failureFlash : true
    }));
  // return messages for signup users
  app.get('/signup/successjson', function(req, res) {
    res.json({ message: 'Successfully created user' });
  });

  app.get('/signup/failurejson', function(req, res) {
    res.json({ message: 'This user already exists' });
  });

// =============================================================================

// ================= Protected APIs for authenticated Users ====================

  // get tools and routes
  var expressJwt = require('express-jwt'),
      REST_POST = require('../routes/REST_POST'),
      REST_GET = require('../routes/REST_GET')

  // authenticate access token
  const authenticate = expressJwt({secret : SERVER_SECRET});

  // GET, EndPoint:
  // http://127.0.0.1:5000/api/users/1
  // app.get('/api/users/:id', authenticate, REST_GET.getAllRecords);

    // POST, Endpoint:

  // http://127.0.0.1:5000/api/users/1/SHubham/sk9331657@gmail.com/20
  // app.post('/api/users/:id/:Name/:Email/:Age', authenticate, REST_POST.Update);


  app.post("/api/sendotp/",function(req,res){
  
    console.log();
      var mobileNo = req.body[0]['data']['Phone'];
     console.log(req.body[0]['OTP'])
    
     var Message="Hi ! You OTP is "+req.body[0]['OTP'];
    // msg91.send(mobileNo, Message, function(err, response){
    //     console.log(err);
    //     console.log(response);
    // });
    console.log(req.connection.remoteAddress);
    
      res.send(["Done"]);
    
    
    })
    
}
