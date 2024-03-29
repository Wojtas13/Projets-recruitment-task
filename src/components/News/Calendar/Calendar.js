import React from 'react';

import Icon from '../../../assets/Calendar.svg';

import './Calendar.css';

const Calendar = () => (
  <section className="wrapper">
    <figure className="icon">
      <div className="icon__wrapper banner">
        <Icon className="icon__svg banner-icon" />
      </div>

      <figcaption className="icon__title">Calendarze</figcaption>
    </figure>
  </section>
);

export default Calendar;
