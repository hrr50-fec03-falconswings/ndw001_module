import React from 'react';
import ProductInfo from '../src/ProductInfo.jsx';


class Display extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div class='grid-container'>
        <div class='grid-item'>Photo Carousel</div>
        <div class='grid-item'>
          <ProductInfo />
        </div>
      </div>
    )
  }
}

export default Display;