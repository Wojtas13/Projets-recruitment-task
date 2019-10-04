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
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnFocus: true,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <SliderInner />
          <SliderInner />
        </Slider>
      </div>
    );
  }
}

export default SliderWrapper;
