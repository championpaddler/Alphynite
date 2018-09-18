var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'shubham123456',
  database : 'FINAL2'
});

try {
	connection.connect();
  console.log('Connected to the MYSQL database');

} catch(e) {
	console.log('Database Connetion failed:' + e);
}

module.exports = connection;
