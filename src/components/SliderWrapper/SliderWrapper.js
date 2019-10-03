import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderWrapper.css';
import SliderInner from './SliderInner/SliderInner';

class SliderWrapper extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <Slider {...settings}>
          <SliderInner />
        </Slider>
      </>
    );
  }
}

export default SliderWrapper;
