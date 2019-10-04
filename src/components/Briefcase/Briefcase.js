import React from 'react';
import './Briefcase.css';
import Icon from '../../assets/Breifcase.svg';
const Briefcase = props => (
  <section className="wrapper">
    <figure className="icon">
      <div className="icon__wrapper">
        <Icon className="icon__svg briefcase-icon" />
      </div>
      <figcaption className="icon__title">Teczki</figcaption>
    </figure>
  </section>
);

export default Briefcase;
