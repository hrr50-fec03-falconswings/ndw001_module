const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root'

});

connection.connect( (err) => {
  if(err){
    throw err;
  } else {
    console.log('Connected to mySQL!');
  }
})


module.exports = connection;