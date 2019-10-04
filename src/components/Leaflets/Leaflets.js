import React from 'react';
import './Leaflets.css';
import Icon from '../../assets/Leaflets.svg';
const Leaflets = props => (
  <section className="wrapper">
    <figure className="icon">
      <div className="icon__wrapper">
        <Icon className="icon__svg" />
      </div>
      <figcaption className="icon__title">Ulotki</figcaption>
    </figure>
  </section>
);

export default Leaflets;
