import React from 'react';

import Icon from '../../../assets/Banner.svg';

import './Banner.css';

const Banner = () => (
  <section className="wrapper">
    <figure className="icon">
      <div className="icon__wrapper banner">
        <Icon className="icon__svg banner-icon" />
      </div>

      <figcaption className="icon__title">Banner</figcaption>
    </figure>
  </section>
);

export default Banner;
