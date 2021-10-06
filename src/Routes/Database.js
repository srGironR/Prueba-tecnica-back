const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'weather',
    
});

connection.connect(function(err){
    if(err){
        console.log(err);
        return;
    } else{
        console.log('Db is connected!');
    }
});

module.exports = connection;