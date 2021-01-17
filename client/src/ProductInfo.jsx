import React from 'react';
const axios = require('axios');
import Ratings from '../src/Ratings.jsx';

class ProductInfo extends React.Component{
  constructor(props){
    super(props);

    // currentId is called productId in db
    this.state = {
      currentId: 1,
      name: '',
      rating: 0.0,
      ratings_amt: 0,
      comments_amt: 0,
      price: 0.00,
      amt_left: 0,
      images: ''
    }

  }
  componentDidMount(){
    let randItem = Math.floor(Math.random() * Math.floor(100));
    console.log(randItem);
    axios.get(`/api/${randItem}/`)
      .then( (res) => {
        let product = res.data[0]
        this.setState({
          currentId: product.productId,
          name: product.name,
          rating: product.rating,
          ratings_amt: product.ratings_amt,
          comments_amt: product.comments_amt,
          price: product.price,
          amt_left: product.amt_left,
          images: product.images
        })
        console.log(res.data[0]);
      })
      .catch( (err) => {
        console.log(err);
      })
  }

  render(){
    return (
      <div class="productInfo">
        <div class='productDescriptionTitle'>
          {`${this.state.name}`}
        </div>
        <div class='productDescriptionMetrics'>
          <div class='stars'>
            <Ratings rating={this.state.rating} />
          </div>
          &nbsp; &nbsp;
          <div class='rating'>{`(${this.state.rating})`}</div>
          &nbsp; &nbsp;
          <div class='ratingAmount'> {`${this.state.ratings_amt} ratings`} </div>
          &nbsp;&nbsp;
          <div class='commentsAmount'> {`${this.state.comments_amt} comments`} </div>
          &nbsp;&nbsp;
          <div class='storeSerial'> {`notWalmart#${this.state.currentId}`}</div>
        </div>
        <div class='price'>
          {`$${this.state.price}`}
        </div>
        <div class='availability'>
          {`Only ${this.state.amt_left} left!`}
        </div>
      </div>
    )

  }

}






export default ProductInfo;