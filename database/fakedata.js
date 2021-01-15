let faker = require('faker');
let db = require('./index.js')

/*
Products
(productId, name, rating, ratings_amt, comments_amt, price, amt_left)
(int, str, #, #, price, #)

Pictures
(picID, productID, imageURL)
*/


// let xbox = '(Xbox Series S, 4.5, 654, 1473, 299.00, 2)';
// let xboxPictures ;
let data = [];

for (let i = 1; i <= 100; i++) {
  let name = faker.commerce.productName();
  let price = faker.commerce.price();
  let rating = (Math.floor(Math.random() * Math.floor(5)) + Math.random()).toFixed(1);
  let randRatings =  Math.floor(Math.random() * Math.floor(150));
  let randComments = Math.floor(Math.random() * Math.floor(200));
  let randRemain = Math.floor(Math.random() * Math.floor(10));
  let picture = faker.image.image();
  let oneProduct = `(${name}, ${rating}, ${randRatings}, ${randComments}, ${price}, ${randRemain})`;
  data.push(oneProduct);
}

// console.log(data);



// let queryString = 'insert into Products (name, rating, ratings_amt, comments_amt, price, amt_left) values (? ? ? ? ? ?)'
// do the questions marks
// db.query(queryString, productArray, (err, data) => {
//
//});
