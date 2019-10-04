import React from 'react';
import Slider from 'react-slick';

import SliderInner from './SliderInner/SliderInner';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderWrapper.css';

class SliderWrapper extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      pauseOnFocus: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
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
