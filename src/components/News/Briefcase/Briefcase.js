import React from 'react';

import Icon from '../../../assets/Breifcase.svg';

import './Briefcase.css';

const Briefcase = () => (
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
