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
  margin-right: 16px;
`;

let ImagesCarousel = styled.div`
  height: 365px;
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
  margin-bottom: 25px;
  border-bottom: rgba(0,0,0,0) solid 4px;
  &:hover {
    border-bottom: #cb2c90 solid 4px;
  }
`;

let ZoomPicture = styled.img`
  position: absolute;
  margin-left: 530px;
  width: 420px;
  height: 520px;
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
      click: false,
      zoom: false
    }
    this.carouselArrow = this.carouselArrow.bind(this);
    this.changeMain = this.changeMain.bind(this);
    this.hoverPicture = this.hoverPicture.bind(this);
    this.unhoverPicture = this.unhoverPicture.bind(this);
    this.zoom = this.zoom.bind(this);
    this.unzoom = this.unzoom.bind(this);
  }

  changeMain(e) {
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

  zoom(e){
    this.setState({
      zoom: true
    })
    let img = document.getElementById('mainPic');
    let result = document.getElementById('zoomPic');
    result.style.display = 'block';
    let lens = document.createElement('DIV');
    lens.setAttribute('class', 'zoom-lens');


    img.parentElement.insertBefore(lens, img);
    let cx = result.offsetWidth / lens.offsetWidth;
    let cy = result.offsetHeight / lens.offsetHeight;
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + 'px ' + (img.height * cy) + 'px';

    let moveLens = (e) => {
      e.preventDefault();
      let pos = getCursorPos(e);
      let x = pos.x - (lens.offsetWidth);
      let y = pos.y - (lens.offsetWidth);
      if(x > img.width - lens.offsetWidth){
        x = img.width - lens.offsetWidth;
      }
      if(x < 0){
        x = 0;
      }
      if(y > img.height - lens.offsetHeight){
        y = img.height - lens.offsetHeight;
      }
      if(y < 0){
        y = 0;
      }
      lens.style.left = (x+120) + 'px';
      lens.style.top = y + 'px';
      result.style.backgroundPosition = '-' + (x * cx) + 'px -' + (y * cy) + 'px';
    }

    let getCursorPos = (e) => {
      e = e || window.event;
      let a = img.getBoundingClientRect();
      let x = e.pageX - a.left;
      let y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
    lens.addEventListener('mousemove', moveLens);
    img.addEventListener('mousemove', moveLens);

  }

  unzoom(e1){
    let img = document.getElementById('mainPic');
    let getCursorPos = (e) => {
      e = e || window.event;
      let a = img.getBoundingClientRect();
      let x = e.pageX - a.left;
      let y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      console.log({x : x, y : y})
      return {x : x, y : y};
    }
    var coords = getCursorPos(e1);
    if ((coords.x > 415 || coords.x < 80) || coords.y > 380) {
      let zoomPic = document.getElementById('zoomPic');
      zoomPic.style.display = 'none';
      this.setState({
        zoom: false
      })
    }
  }
  render() {
    if(this.props.images.length){
      return (
        <div className='mainContainer' id='mainContainer1'>
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
          <MainPicture id='mainPic' onMouseEnter={this.zoom} onMouseLeave={this.unzoom} src={this.props.images[this.state.mainDisplay]}></MainPicture>
          <ZoomPicture id='zoomPic' ></ZoomPicture>
        </div>
      )
    } else {
      return <div>Loading</div>;
    }
  }
}

export default PhotoCarousel;

