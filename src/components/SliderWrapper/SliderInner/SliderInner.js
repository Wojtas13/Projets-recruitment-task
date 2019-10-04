import React from 'react';
import './SliderInner.css';
import Button from '../../Button/Button';

const SliderInner = () => (
  <>
    <header className="slider">
      <h1 className="slider__title mobile-title">
        Ciekawy <strong>slogan reklamowy</strong>
      </h1>
      <div className="slider-wrapper">
        <section className="cards-wrapper">
          <div className="cards">
            <div className="card">
              <div className="card__info">
                <span>
                  <strong className="card__title">Wizytówka</strong>
                </span>
                <span className="card__size">85x55 mm</span>
              </div>
              <div className="card__price">
                <span className="card__quantity">250 szt.</span>
                <span className="card__price-price">
                  <strong>57,99 zł</strong>
                </span>
              </div>
            </div>
            <div className="card card-behind">
              <div className="card__info info-behind">
                <span>
                  <strong className="card__title">Wizytówka</strong>
                </span>
                <span className="card__size">90x50 mm</span>
              </div>
              <div className="card__price price-behind">
                <span className="card__quantity">250 szt.</span>
                <span className="card__price-price">
                  <strong>57,99 zł</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="jumbotron">
          <h1 className="slider__title desktop-title">
            Ciekawy <strong>slogan reklamowy</strong>
          </h1>
          <span className="caption">
            Otwieramy się na niskie nakłady! Niższe ceny małych zamówień!
          </span>
          <Button />
        </section>
      </div>
    </header>
  </>
);

export default SliderInner;
