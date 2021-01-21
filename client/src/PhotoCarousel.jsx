import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: 0,
      mainDisplay: 0,
      previousMain: 0,
      click: false

    }
    this.carouselArrow = this.carouselArrow.bind(this);
    this.changeMain = this.changeMain.bind(this);
    this.hoverPicture = this.hoverPicture.bind(this);
    this.unhoverPicture = this.unhoverPicture.bind(this);
  }

  changeMain(e) {
    this.setState({
      mainDisplay: e.target.id,
      click: true
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

  hoverPicture(e){
    this.setState({
      previousMain: this.state.mainDisplay,
      mainDisplay: e.target.id
    })
  }

  unhoverPicture(e){
    if(this.state.click){
      this.setState({
        click: false
      })
    } else {
      this.setState({
        mainDisplay: this.state.previousMain
      })
    }
  }

  render() {

    if(this.state.currentPicture === 0){
      return (
        <div class='picGrid'>
          <img className='main' src={this.props.images[this.state.mainDisplay]} />
          <div className='leftImages'>
            <img className='images' onMouseEnter={this.hoverPicture} onMouseLeave={this.unhoverPicture} onClick={this.changeMain} id={this.state.currentPicture} src={this.props.images[this.state.currentPicture]}/>
            <img className='images' onMouseEnter={this.hoverPicture} onMouseLeave={this.unhoverPicture} onClick={this.changeMain} id={this.state.currentPicture +1}  src={this.props.images[this.state.currentPicture + 1]}/>
            <img className='images'  onClick={this.changeMain} onMouseEnter={this.hoverPicture} onMouseLeave={this.unhoverPicture} id={this.state.currentPicture +2}  src={this.props.images[this.state.currentPicture + 2]}/>
            <img className='images'  onClick={this.changeMain} onMouseLeave={this.unhoverPicture} onMouseEnter={this.hoverPicture} id={this.state.currentPicture +3}  src={this.props.images[this.state.currentPicture + 3]}/>
            <FontAwesomeIcon className='arrow' onClick={this.carouselArrow} icon={faChevronDown}/>
          </div>
        </div>
      )
    } else {
      return (
        <div class='picGrid'>
          <img className='main' src={this.props.images[this.state.mainDisplay]} />
          <div id='images'>
          <FontAwesomeIcon className='arrow' onClick={this.carouselArrow} icon={faChevronUp} />
          <img className='images' onMouseEnter={this.hoverPicture} onMouseLeave={this.unhoverPicture} onClick={this.changeMain} id={this.state.currentPicture} src={this.props.images[this.state.currentPicture]}/>
            <img className='images' onMouseEnter={this.hoverPicture} onMouseLeave={this.unhoverPicture} onClick={this.changeMain} id={this.state.currentPicture +1}  src={this.props.images[this.state.currentPicture + 1]}/>
            <img className='images'  onClick={this.changeMain} onMouseEnter={this.hoverPicture} onMouseLeave={this.unhoverPicture} id={this.state.currentPicture +2}  src={this.props.images[this.state.currentPicture + 2]}/>
            <img className='images'  onClick={this.changeMain} onMouseLeave={this.unhoverPicture} onMouseEnter={this.hoverPicture} id={this.state.currentPicture +3}  src={this.props.images[this.state.currentPicture + 3]}/>
          </div>
        </div>
      )
    }
    }
}

// Main Component, Images Componenet

export default PhotoCarousel;