
exports.Update = function (req,res) {
	var connection = require('../model/dbconnection');
	var response = [];
	var id=req.params.id;

	var name= req.params.Name;
	var email=req.params.Email;
	var Age=+(req.params.Age);

	connection.query('UPDATE users SET Name=?,Email = ? ,Age = ? WHERE username = ?', [name,email,Age,id],
	function(err, result) {
		  if (!err){

			if (result.affectedRows != 0) {
				response.push({'result' : 'Updated'});
			} else {
				response.push({'msg' : 'No Result Found'});
			}

			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(response));
		  } else {
			res.status(400).send(err);
		  }
	});

	
		
	};

