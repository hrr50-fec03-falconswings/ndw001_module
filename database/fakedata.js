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


// Creates fake data
for (let i = 1; i <= 100; i++) {
  let name = faker.commerce.productName();
  let price = faker.commerce.price();
  let rating = (Math.floor(Math.random() * Math.floor(5)) + Math.random()).toFixed(1);
  let randRatings =  Math.floor(Math.random() * Math.floor(150));
  let randComments = Math.floor(Math.random() * Math.floor(200));
  let randRemain = Math.floor(Math.random() * Math.floor(10));
  let picArr = [];
  // creates 7 pictures to add into images
  for(let k = 0; k < 7; k++){
    let picture = faker.image.image();
    picArr.push(picture);
  }
  let pictureArr = JSON.stringify(picArr);
  let queryString = 'insert into Products (name, rating, ratings_amt, comments_amt, price, amt_left, images) values (?, ?, ?, ?, ?, ?, ?)'
  let oneProduct = [name, rating, randRatings, randComments, price, randRemain, pictureArr];
  // each loop will CREATE to db using the randomly generated data above
  db.query(queryString, oneProduct, (err, results) => {
    if(err){
      console.log(err);
    } else {
      console.log(results);
    }
  });
}
