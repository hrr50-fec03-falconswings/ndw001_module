import React from 'react';
import Ratings from '../src/Ratings.jsx';

class ProductInfo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="productInfo">
        <div className='productDescriptionTitle'>
          {`${this.props.name}`}
        </div>
        <div className='productDescriptionMetrics'>
          <div className='stars'>
            <Ratings rating={this.props.rating} />
          </div>

          <span className='rating'>{`(${this.props.rating})`}</span>

          <span className='ratingAmount'> {`${this.props.ratings_amt} ratings`} </span>

          <span className='commentsAmount'> {`${this.props.comments_amt} comments`} </span>

          <span className='storeSerial'> {`notWalmart#${this.props.currentId}`}</span>
        </div>

        <div className='price'>
          {`$${this.props.price}.00`}
        </div>

        <div className='availability'>
          {`Only ${this.props.amt_left} left!`}
        </div>
        <div className='addOns'>
          <div className='topLine'>
            <span className='addOnHeader'>Add-on Services </span>
            <span> (0 Selected) <u>Show Less</u></span>
          </div>
          <div className='secondLine'>Add <u>Walmart protection plan</u> powered by Allstate</div>
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