import React from 'react';




class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class='picGrid'>
        <img className='main' src={this.props.images[0]} />
        <div className='image1'>IMG1</div>
        <div className='image2'>IMG2</div>
        <div className='image3'>IMG3</div>
        <div className='image4'>IMG4</div>
        <div className='image5'>IMG5</div>
      </div>
    )
  }
}



// Main Component, Images Componenet

export default PhotoCarousel;