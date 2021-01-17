DROP DATABASE IF EXISTS notWalmart;
CREATE DATABASE notWalmart;
USE notWalmart;

-- productId is called currentId in ProductInfo.jsx
CREATE TABLE Products (
  productId int not null AUTO_INCREMENT,
  name VARCHAR(250),
  rating Decimal (2,1),
  ratings_amt int,
  comments_amt int,
  price Decimal (5,2),
  amt_left Integer,
  images MEDIUMTEXT,
  PRIMARY KEY (productId)
)
-- Each product has multiple pictures

-- CREATE TABLE Pictures (
--   picId Integer,
--   productId Integer,
--   imageURL String,
--   PRIMARY KEY (id),
--   FOREIGN KEY (productId) REFERENCES Products(productId)
-- )

-- INSERT INTO Products (name, rating, ratings_amt, comments_amt, price, amt_left, images)
-- VALUES ()

-- INSERT INTO Pictures (picId, productId, imageURL) VALUES

