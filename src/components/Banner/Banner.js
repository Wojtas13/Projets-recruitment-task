import React from 'react';
import './Banner.css';
import Icon from '../../assets/Banner.svg';

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
