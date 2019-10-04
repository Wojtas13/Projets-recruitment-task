import React from 'react';
import './Poster.css';
import Icon from '../../assets/Poster.svg';
const Poster = props => (
  <section className="wrapper">
    <figure className="icon">
      <div className="icon__wrapper">
        <Icon className="icon__svg poster-icon" />
      </div>
      <figcaption className="icon__title">Plakaty</figcaption>
    </figure>
  </section>
);

export default Poster;
