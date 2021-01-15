const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'notWalmart'

});

connection.connect( (err) => {
  if(err){
    throw err;
  } else {
    console.log('Connected to mySQL!');
  }
})

// connect.readAll();


module.exports = connection;