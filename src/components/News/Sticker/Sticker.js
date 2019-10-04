import React from 'react';

import Stickers from '../../../assets/Stickers.svg';

import './Sticker.css';

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
