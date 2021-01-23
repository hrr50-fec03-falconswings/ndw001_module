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

          <span class='rating'>{`(${this.props.rating})`}</span>

          <span class='ratingAmount'> {`${this.props.ratings_amt} ratings`} </span>

          <span class='commentsAmount'> {`${this.props.comments_amt} comments`} </span>

          <span class='storeSerial'> {`notWalmart#${this.props.currentId}`}</span>
        </div>

        <div class='price'>
          {`$${this.props.price}.00`}
        </div>

        <div class='availability'>
          {`Only ${this.props.amt_left} left!`}
        </div>
        <div class='addOns'>
          <div class='topLine'>
            <span class='addOnHeader'>Add-on Services </span>
            <span> (0 Selected) <u>Show Less</u></span>
          </div>
          <div class='secondLine'>Add <u>Walmart protection plan</u> powered by Allstate</div>
          <div><input type="radio"></input> None
          <input type="radio"></input> 3 Years - $38.00
          <input type="radio"></input> 4 Years - $45.00
          </div>

        </div>
      </div>
    )

  }

}


export default ProductInfo;