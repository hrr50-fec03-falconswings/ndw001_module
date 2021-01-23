import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import styled, {css} from 'styled-components'

let MainPicture = styled.img`
  grid-row: 1;
  grid-column: 2 / 6;
  object-fit:cover;
  width: 420px;
  height: 420px;
`;

let ImagesCarousel = styled.div`
  height: 380px;
  width: 100px;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  overflow: hidden;
  scroll-behavior: smooth;
  // background-color: red;
`;

let Image = styled.img`
  padding-bottom: 6px;
  width: 40px;
  height: 40px;
  &:hover {
    border-bottom: red solid 3px;
  }
`;

let ZoomPicture = styled.img`
  position: absolute;
  right: 0px;
  width: 200px;
  grid-column: 5;
  position: absolute;
  width: 50%;
  height: 50%;

`
let CarouselContainer = styled.div`
  width: 40px;
  padding-left: 20px;
`

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderTopArrow: false,
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
    // console.log('clicking');
    this.setState({
      mainDisplay: e.target.id,
      click: true
    })
  }

  carouselArrow(e){
    if(this.state.renderTopArrow){
      this.setState({
        renderTopArrow: false
      })
      let arrow = document.getElementById('topArrow');
      arrow.style.display = 'none';
      let show = document.getElementById('bottomArrow');
      show.style.display = 'block';
    } else {
      this.setState({
        renderTopArrow: true
      })
      let arrow = document.getElementById('bottomArrow');
      arrow.style.display = 'none';
      let show = document.getElementById('topArrow');
      show.style.display = 'block';
    }
  }

  hoverPicture(e){
    // console.log('hovering');
    this.setState({
      previousMain: this.state.mainDisplay,
      mainDisplay: e.target.id
    })
    // document.getElementById('')
  }

  unhoverPicture(e){
    // console.log('unhovering');
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
    if(this.props.images.length){
      return (
        <div class='mainContainer'>
          <CarouselContainer>
            <a className='buttonContainer' id='topArrow' href='#0'>
                <FontAwesomeIcon className='arrow' onClick={this.carouselArrow} icon={faChevronUp} />
            </a>
            <ImagesCarousel>
              {this.props.images.map( (image, i) => (
                <Image key={i} id={i} onMouseEnter={this.hoverPicture} onMouseLeave={this.unhoverPicture} onClick={this.changeMain} src={image}></Image>
              ))}
            </ImagesCarousel>
            <a className='buttonContainer' id='bottomArrow' href='#4'>
                <FontAwesomeIcon className='arrow' onClick={this.carouselArrow} icon={faChevronDown} />
            </a>
          </CarouselContainer>
            <MainPicture src={this.props.images[this.state.mainDisplay]}></MainPicture>
            {/* <ZoomPicture src={this.props.images[this.state.mainDisplay]}></ZoomPicture> */}
        </div>
      )
    } else {
      return <div>Loading</div>;
    }
  }
}

// Main Component, Images Componenet

export default PhotoCarousel;

/*


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



where the render is
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

*/
