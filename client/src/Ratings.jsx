import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solid from '@fortawesome/free-solid-svg-icons'
import * as reg from '@fortawesome/free-regular-svg-icons'

class Ratings extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    if (this.props.rating < 0.3) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={reg.faStar}/>
          <FontAwesomeIcon id='star2'icon={reg.faStar}/>
          <FontAwesomeIcon id='star3'icon={reg.faStar}/>
          <FontAwesomeIcon id='star4'icon={reg.faStar}/>
          <FontAwesomeIcon id='star5'icon={reg.faStar}/>
        </div>
      )
    } else if (this.props.rating >= 0.4 && this.props.rating < 0.7) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStarHalf}/>
        </div>
      )
    } else if ( this.props.rating >= 0.8 && this.props.rating < 1.4 ) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStar}/>
        </div>
      )
    } else if ( this.props.rating >= 1.4 && this.props.rating < 1.7 ) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStar}/>
          <FontAwesomeIcon id='star2'icon={solid.faStarHalf}/>
        </div>
      )
    } else if ( this.props.rating >= 1.8 && this.props.rating < 2.4 ) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStar}/>
          <FontAwesomeIcon id='star2'icon={solid.faStar}/>
        </div>
      )
    } else if ( this.props.rating >= 2.4 && this.props.rating < 2.7 ) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStar}/>
          <FontAwesomeIcon id='star2'icon={solid.faStar}/>
          <FontAwesomeIcon id='star3'icon={solid.faStarHalf}/>
        </div>
      )
    } else if ( this.props.rating >= 2.8 && this.props.rating < 3.4 ) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStar}/>
          <FontAwesomeIcon id='star2'icon={solid.faStar}/>
          <FontAwesomeIcon id='star3'icon={solid.faStar}/>
        </div>
      )
    } else if ( this.props.rating >= 3.4 && this.props.rating < 3.7 ) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStar}/>
          <FontAwesomeIcon id='star2'icon={solid.faStar}/>
          <FontAwesomeIcon id='star3'icon={solid.faStar}/>
          <FontAwesomeIcon id='star4'icon={solid.faStarHalf}/>
        </div>
      )
    } else if ( this.props.rating >= 3.8 && this.props.rating < 4.4 ) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStar}/>
          <FontAwesomeIcon id='star2'icon={solid.faStar}/>
          <FontAwesomeIcon id='star3'icon={solid.faStar}/>
          <FontAwesomeIcon id='star4'icon={solid.faStar}/>
        </div>
      )
    } else if ( this.props.rating >= 4.4 && this.props.rating < 4.7 ) {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStar}/>
          <FontAwesomeIcon id='star2'icon={solid.faStar}/>
          <FontAwesomeIcon id='star3'icon={solid.faStar}/>
          <FontAwesomeIcon id='star4'icon={solid.faStar}/>
          <FontAwesomeIcon id='star5'icon={solid.faStarHalf}/>
        </div>
      )
    } else {
      return (
        <div>
          <FontAwesomeIcon id='star1'icon={solid.faStar}/>
          <FontAwesomeIcon id='star2'icon={solid.faStar}/>
          <FontAwesomeIcon id='star3'icon={solid.faStar}/>
          <FontAwesomeIcon id='star4'icon={solid.faStar}/>
          <FontAwesomeIcon id='star5'icon={solid.faStar}/>
        </div>
      )
    }
  }


}

export default Ratings;