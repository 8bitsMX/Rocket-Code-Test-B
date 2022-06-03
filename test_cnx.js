'use strict'
let mysql = require('mysql');
/* Conexión local 
var cnx = mysql.createConnection({
    host:'localhost',
    database:'rocket_code_test',
    user:'root',
    password:''
}); */

// Cnx a testing Rocket Code
var cnx = mysql.createConnection({
    host:'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    database:'testing_ali_fullstack',
    user:'testing',
    password:'Pruebas%ALI%2020'
}); 

cnx.connect(function(error){
    if(error){
        throw error;
    }else{}
    console.log('CONEXION ESTABLECIDA CORRECTAMENTE TEST ROCKET')
});