# Node-MySQL-Rest-API-Passport-JWT
Simple RESTful API implementation on Node.js + Express + MySQL + Passport + JWT

REST API for CRUD operations with database using Node.js and Express.js framework with MySQL. For access control this project use Passport.js and JSON Web Token.

# Running project

You need to have installed Node.js and MySQL on your local machine.

## Install dependencies

To install dependencies enter project folder and run following command:

`npm install`


## Setting up local MySQL database


First edit `/model/dbconnection.js` and `/config/database.js` to add your username and password and database for your local MySQL database.
To create user table for Passport signup and login, run node #scripts/create_database.js


## To run server execute:

`node server.js`

###Usage

Create User:
# POST : http://127.0.0.1:5000/signup?username=shubhamkumar&password=kumar
Result: {"message":"Successfully created user"}

Login User: 
# POST : http://127.0.0.1:5000/login?username=shubhamkumar&password=kumar

Result: {"user":{"id":"shubhamkumar"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNodWJoYW1rdW1hciIsImlhdCI6MTUzMzQ3MTM2NywiZXhwIjoxNTMzNDcyNTY3fQ.HDCMrL-kz9Z61O9pAKgSRJth3raw8NK5fHpw9cpIC7Q"}

Gettting User Details using username:
FORMAT : http://127.0.0.1:5000/api/users/username 
# GET: http://127.0.0.1:5000/api/users/shubham   Please Set Auth Token in Get Request
Result : [{"result":"success","data":[{"id":1,"username":"shubham","Name":"Shubham","Email":"sk9331657@gmail.com","Age":"18","password":"$2a$10$u0G2fajJMpGe3PCo3b6EKeVmJ55qPL6Xb/1KK32YekkeYqnhTdk8q"}]}]

Updating User :

FORMAT : http://127.0.0.1:5000/api/users/username/Name/Email/Age
# POST  : http://127.0.0.1:5000/api/users/shubham/Shubham/test@gmail.com/19
 Result : [{"result":"Updated"}]




