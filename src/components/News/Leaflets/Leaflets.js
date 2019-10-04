import React from 'react';

import Icon from '../../../assets/Leaflets.svg';

import './Leaflets.css';

const Leaflets = () => (
  <section className="wrapper">
    <div className="wrapper-hover">
      <figure className="icon">
        <div className="icon__wrapper">
          <Icon className="icon__svg" />
        </div>

        <figcaption className="icon__title">Ulotki</figcaption>
      </figure>
    </div>
  </section>
);

export default Leaflets;
