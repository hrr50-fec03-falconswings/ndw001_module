const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js')

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/a', (req, res) => {
  console.log("hello there");
  res.send();
})

//app.get('/api/:productId/imgs', (req,res))
// Will return an obj with imageURLs

//app.get('api/:productId/', (req,res) )
//Will return an obj with name, ratings_amt, comments_amt, price, amt_left


app.listen(port, () => {
  console.log('Listening at PORT 3000');
})