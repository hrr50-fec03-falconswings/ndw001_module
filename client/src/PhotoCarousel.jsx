import React from 'react';




class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class='picGrid'>
        <img className='main' src={this.props.images[0]} />
        <div id='images'>
          <img className='images' src={this.props.images[1]}/>
          <img className='images' src={this.props.images[2]}/>
          <img className='images' src={this.props.images[3]}/>
          <img className='images' src={this.props.images[4]}/>

        </div>

      </div>
    )
  }
}

// Main Component, Images Componenet

export default PhotoCarousel;