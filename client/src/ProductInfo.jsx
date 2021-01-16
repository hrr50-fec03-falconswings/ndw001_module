import React from 'react';
const axios = require('axios');

class ProductInfo extends React.Component{
  constructor(){
    super();

    this.state = {
      currentProduct: 1
    }

  }




  // componentDidMount(){

  // }




  render(){
    return (
      <div>
        <div class='productDescriptionTitle'>
          ProductName
        </div>
        <div class='productDescriptionMetrics'>
          <div class='stars'>STARSIMG </div>
          &nbsp;
          <div class='rating'>(0.0)</div>
          &nbsp;
          <div class='ratingAmount'> #Ratings </div>
          &nbsp; &nbsp;
          <div class='commentsAmount'>  #Comments </div>
          &nbsp;
          <div class='storeSerial'> notWalmart#id </div>
        </div>
      </div>
    )

  }

}






export default ProductInfo;