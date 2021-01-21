import React from 'react';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Display from '../Display.jsx';
import ProductInfo from '../ProductInfo';

describe('sample tests', () => {
  it('should be true', () => {
    let test = true;
    expect(test).toBe(true);
  });
})

describe('Display Test', () => {
  it('Component Display Exists', () => {
    const display = shallow(<Display/>);
    expect(display.exists()).toBe(true);
  });
});


/*
Psuedocode for Tests

It should render the correct information
  -Check that the Rating matches state
  -Check that the Comments matches state
  -Check that the SerialNumber matches state
  -Check that the Price matches state
  -Check that the RemainingAmount matches state

It should display the current amount of images
  -Check that the images.length === the amount of rendered pictures

It should be able to hover over a picture to display it temporarily in the center
  -Check to see that the hovered picture's id is equal to the one in the main display.
  -Check that removing the hover will set the main display picture back to the id of the main picture from before the hover.

It should be able to click on a picture to set it as main
  -When a picture is clicked, check to see that the main display state is set to the id of the clicked picture.

It should be able to zoom in on a picture
  -Check to see that it only zooms on the main display picture.
  -Check to see that hovering over the main picture activates the zoom.

It should be able to change the images when clicking on the arrow.
  -When an arrow is clicked, the images change.
  -When the other arrow is clicked, the original images return.



*/
