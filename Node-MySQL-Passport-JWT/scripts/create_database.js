

var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE Alpha');

connection.query('\
CREATE TABLE IF NOT EXISTS Alpha.Users ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
     `Name` VARCHAR(20) , \
    `Email` VARCHAR(20) , \
    `Phone` CHAR(10) , \
    `password` CHAR(60) , \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
)',function(err,result)
{
    if(err)
    {
        console.log(err);
    }
    console.log("Users Created")
});



connection.query('\
CREATE TABLE IF NOT EXISTS Alpha.Company ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
     `CompanyName` VARCHAR(20) , \
    `Year` CHAR(4) , \
    `CEO` VARCHAR(40) , \
    `GST` VARCHAR(40) , \
    `password` CHAR(60) NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
)',function(err,result)
{
    if(err)
    {
        console.log(err);
    }
    console.log("Users Created")
});


connection.query('\
CREATE TABLE IF NOT EXISTS Alpha.Company ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
     `CompanyName` VARCHAR(20) , \
    `Year` CHAR(4) , \
    `CEO` VARCHAR(40) , \
    `GST` VARCHAR(40) , \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
)',function(err,result)
{
    if(err)
    {
        console.log(err);
    }
    console.log("Users Created")
});


connection.end();
