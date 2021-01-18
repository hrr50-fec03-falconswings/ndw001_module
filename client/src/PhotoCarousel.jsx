import React from 'react';




class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: 0,
      mainPicture: 0
    }
    this.carouselArrow = this.carouselArrow.bind(this);
    this.changeMain = this.changeMain.bind(this);
  }

  changeMain(e){
    console.log(e.target.id);
    console.log(e.target);
    this.setState({
      mainPicture: e.target.id
    })
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


  render() {
    return (
      <div class='picGrid'>
        <img className='main' src={this.props.images[this.state.mainPicture]} />
        <div id='images'>
          <img className='images' onClick={this.changeMain} id={this.state.currentPicture} src={this.props.images[this.state.currentPicture]}/>
          <img className='images' onClick={this.changeMain} id={this.state.currentPicture +1}  src={this.props.images[this.state.currentPicture + 1]}/>
          <img className='images' onClick={this.changeMain} id={this.state.currentPicture +2}  src={this.props.images[this.state.currentPicture + 2]}/>
          <img className='images' onClick={this.changeMain} id={this.state.currentPicture +3}  src={this.props.images[this.state.currentPicture + 3]}/>
          <button onClick={this.carouselArrow}>Click for More</button>
        </div>

      </div>
    )
  }
}

// Main Component, Images Componenet

export default PhotoCarousel;