import React from 'react';




class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: 0
    }
    this.carouselArrow = this.carouselArrow.bind(this);

  }

  carouselArrow(){
    if(this.state.currentPicture === 0){
      this.setState({
        currentPicture: 4
      })
    } else {
      this.setState({
        currentPicture: 0
      })
    }
  }
// push button, set state to second half
//it should render

  render() {
    return (
      <div class='picGrid'>
        <img className='main' src={this.props.images[0]} />
        <div id='images'>
          <img className='images' src={this.props.images[this.state.currentPicture]}/>
          <img className='images' src={this.props.images[this.state.currentPicture + 1]}/>
          <img className='images' src={this.props.images[this.state.currentPicture + 2]}/>
          <img className='images' src={this.props.images[this.state.currentPicture + 3]}/>
          <button onClick={this.carouselArrow}>Click for More</button>
        </div>

      </div>
    )
  }
}

// Main Component, Images Componenet

export default PhotoCarousel;