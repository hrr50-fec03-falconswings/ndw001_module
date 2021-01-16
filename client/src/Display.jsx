import React from 'react';

class Display extends React.Component{
  constructor(){
    super();

  }



  render(){
    return(
      <div class='grid-container'>
        <div class='grid-item'>Photo Carousel</div>
        <div class='grid-item'>Item Description</div>
      </div>
    )
  }
}

export default Display;