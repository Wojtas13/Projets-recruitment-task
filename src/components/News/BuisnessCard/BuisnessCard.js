import React from 'react';

import Icon from '../../../assets/Buisness-card.svg';

import './BuisnessCard.css';

const BuisnessCard = () => (
  <section className="wrapper">
    <figure className="icon">
      <div className="icon__wrapper buisness-card">
        <Icon className="icon__svg buisness-card-icon" />
      </div>

      <figcaption className="icon__title">Wizytówki</figcaption>
    </figure>
  </section>
);

export default BuisnessCard;
