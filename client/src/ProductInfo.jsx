import React from 'react';
const axios = require('axios');
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import * as reg from '@fortawesome/free-regular-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

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
          <div class='stars'>
            <FontAwesomeIcon id='star1'icon={faStar}/>
            <FontAwesomeIcon id='star2'icon={faStar}/>
            <FontAwesomeIcon id='star3'icon={faStar}/>
            <FontAwesomeIcon id='star4'icon={faStar}/>
            <FontAwesomeIcon id='star5'icon={reg.faStar}/>
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
      </div>
    )

  }

}






export default ProductInfo;