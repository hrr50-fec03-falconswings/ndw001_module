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

connection.readOne = ( productId, callback ) => {
  // finds product using ID and sends back to client
  connection.query(`select * from Products where productId=${productId}`, (err, productData) => {
    if(err){
      callback(err, null);
    } else {
      callback(null, productData);
    }
  })
}

module.exports = connection;
