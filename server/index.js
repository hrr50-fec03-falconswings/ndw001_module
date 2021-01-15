const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js')

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// app.get('/a', (req, res) => {
//   // console.log("hello there");
//   res.send();
// })


app.get('/api/:productId/', (req,res) => {
  let sendProductInfo = (err, data) => {
    if(err){
      console.log(err);
    } else {
      res.send(data);
    }
  }
  db.readOne(req.params.productId, sendProductInfo );
})



app.listen(port, () => {
  console.log('Listening at PORT 3000');
})


/*
   productId: 100
        name: Unbranded Soft Fish
      rating: 2.8
 ratings_amt: 124
comments_amt: 199
       price: 13.00
    amt_left: 2
      images: ["http://placeimg.com/640/480/animals","http://placeimg.com/640/480/food","http://placeimg.com/640/480/city","http://placeimg.com/640/480/fashion","http://placeimg.com/640/480/technics","http://placeimg.com/640/480/people","http://placeimg.com/640/480/abstract"]

*/