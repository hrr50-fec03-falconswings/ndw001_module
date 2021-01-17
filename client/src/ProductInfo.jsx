import React from 'react';
const axios = require('axios');
import Ratings from '../src/Ratings.jsx';

class ProductInfo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentProduct: 1,
      amount: 2
    }

  }
  // componentDidMount(){

  // }

  //pass props into Ratings

  render(){
    return (
      <div class="productInfo">
        <div class='productDescriptionTitle'>
          ProductName
        </div>
        <div class='productDescriptionMetrics'>
          <div class='stars'>
            <Ratings />
          </div>
          &nbsp; &nbsp;
          <div class='rating'>(0.0)</div>
          &nbsp; &nbsp;
          <div class='ratingAmount'> #Ratings </div>
          &nbsp;&nbsp;
          <div class='commentsAmount'>  #Comments </div>
          &nbsp;&nbsp;
          <div class='storeSerial'> notWalmart#id </div>
        </div>
        <div class='price'>
          Price
        </div>
        <div class='availability'>
          {`Only ${this.state.amount} left!`}
        </div>
      </div>
    )

  }

}






export default ProductInfo;