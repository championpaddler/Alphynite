

exports.getAllRecords = function (req,res) {
	var connection = require('../model/dbconnection');
	var val = (req.params.id);

	

	

	connection.query('SELECT * from  users WHERE username = ? ',
	[val], function(err, rows, fields) {
  		if (!err){
  			var response = [];

			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}

			res.setHeader('Content-Type', 'application/json');
	    	res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
};

