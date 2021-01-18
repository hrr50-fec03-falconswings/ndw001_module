import React from 'react';
import Ratings from '../src/Ratings.jsx';

class ProductInfo extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div class="productInfo">
        <div class='productDescriptionTitle'>
          {`${this.props.name}`}
        </div>
        <div class='productDescriptionMetrics'>
          <div class='stars'>
            <Ratings rating={this.props.rating} />
          </div>
          &nbsp; &nbsp;
          <div class='rating'>{`(${this.props.rating})`}</div>
          &nbsp; &nbsp;
          <div class='ratingAmount'> {`${this.props.ratings_amt} ratings`} </div>
          &nbsp;&nbsp;
          <div class='commentsAmount'> {`${this.props.comments_amt} comments`} </div>
          &nbsp;&nbsp;
          <div class='storeSerial'> {`notWalmart#${this.props.currentId}`}</div>
        </div>
        <div class='price'>
          {`$${this.props.price}.00`}
        </div>
        <div class='availability'>
          {`Only ${this.props.amt_left} left!`}
        </div>
      </div>
    )

  }

}






export default ProductInfo;