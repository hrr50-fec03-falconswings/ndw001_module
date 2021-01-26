import React from 'react';
import ProductInfo from '../src/ProductInfo.jsx';
import PhotoCarousel from '../src/PhotoCarousel.jsx';
const axios = require('axios');

class Display extends React.Component{
  constructor(){
    super();
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
          images: JSON.parse(product.images)
        })
      })
      .catch( (err) => {
        console.log(err);
      })
  }

  render(){
    return(
      <div className='grid-container'>
        <div className='grid-item'>
          <PhotoCarousel images={this.state.images}/>
        </div>
        <div className='grid-item'>
          <ProductInfo currentId={this.state.currentId} name={this.state.name} rating={this.state.rating} ratings_amt={this.state.ratings_amt} comments_amt={this.state.comments_amt} price={this.state.price} amt_left={this.state.amt_left}/>
        </div>
      </div>
    )
  }
}

export default Display;