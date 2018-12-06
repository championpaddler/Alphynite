var express = require('express');
var router = express.Router();
var multer = require('multer');

var bcrypt= require('bcrypt');
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
   cb(null, path.join(__dirname + '/public/uploads'))
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


 
router.post('/upload',upload.single('photo'), function (req, res,err) {
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
 
	

	


router.post("/sendotp/",function(req,res){

console.log();
	var mobileNo = req.body[0]['data']['Phone'];
 console.log(req.body[0]['OTP'])

 var Message="Hi ! You OTP is "+req.body[0]['OTP'];
msg91.send(mobileNo, Message, function(err, response){
    console.log(err);
    console.log(response);
});
console.log(req.connection.remoteAddress);

	res.send(["Done"]);


})



router.post("/signup/",function(req,res){

	console.log(req.body[0]['data']['Phone']);
	

	const saltRounds = 10;
	bcrypt.hash(req.body[0]['data']['Phone'], saltRounds, function(err, hash) {
		console.log(hash);
	res.status(200).send({"hash":String(hash)});
	  });
	
  })
  

  router.post("/product",function(req,res){

    console.log("got")
  console.log(req.body);
    
  res.send(["Done"])
    });


module.exports = router;

