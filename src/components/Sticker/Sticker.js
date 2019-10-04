import React from 'react';
import './Sticker.css';
import Stickers from '../../assets/Stickers.svg';

const Sticker = () => (
  <section className="wrapper">
    <figure className="icon">
      <div className="icon__wrapper sticker">
        <Stickers className="sticker-icons" />
      </div>
      <figcaption className="icon__title">Naklejki</figcaption>
    </figure>
  </section>
);

export default Sticker;
