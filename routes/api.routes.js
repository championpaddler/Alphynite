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

//the controllers
var api_controller = require("../controller/api.controllers");
 
router.post('/upload',upload.single('photo'), api_controller.upload);
router.post("/sendotp/",api_controller.sendotp);
router.post("/signup/",api_controller.signup);
router.post("/product",api_controller.product);


module.exports = router;

