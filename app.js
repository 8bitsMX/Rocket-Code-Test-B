'Use Strict'
//Declaracion de dependencias
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.port || 3000;
const app = express();

app.use(bodyParser.json());


/* Conexión local 
var cnx = mysql.createConnection({
    host:'localhost',
    database:'rocket_code_test',
    user:'root',
    password:''
}); */

/*Conexion a nube*/
var cnx = mysql.createConnection({
    host:'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    database:'testing_ali_fullstack',
    user:'testing',
    password:'Pruebas%ALI%2020'
}); 


app.get('/',(req,res)=>{
    res.send('HOME');
});

app.get('/encuestas',(req,res)=>{
    const sql = 'SELECT * FROM users_test_sabino_rendon';
    cnx.query(sql,(err,result)=>{
        if(err) throw err;
        if (result.length > 0){
            res.json(result);
        }else{res.send('No existen datos en la DB....');}
    });
});

app.post('/guardar',(req,res)=>{
   //const sql = 'INSERT INTO users_test_sabino_rendon (nombre, segundoNombre, paterno, materno, fechaNacimiento, correo, telefono) VALUES ?';
    const sql = 'INSERT INTO users_test_sabino_rendon SET ?';
    const encuesta = {
        nombre: req.body.nombre,
        segundoNombre: req.body.segundoNombre,
        paterno: req.body.paterno,
        materno: req.body.materno,
        fechaNacimiento: req.body.fechaNacimiento,
        correo: req.body.correo,
        telefono: req.body.telefono
    };

    cnx.query(sql, encuesta,(err,result)=>{
        if(err) throw err;
            res.send('Registro salvado....');
        });
});


cnx.connect(function(error){
    if(error){
        throw error;
    }else{}
    console.log('CONEXION ESTABLECIDA CORRECTAMENTE TEST ROCKET')
});

app.listen(PORT, ()=> console.log(`Server en el puerto ${PORT}`));