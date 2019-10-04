import React from 'react';

import Leaflets from './Leaflets/Leaflets';
import Banner from './Banner/Banner';
import BuisnessCard from './BuisnessCard/BuisnessCard';
import Sticker from './Sticker/Sticker';
import Briefcase from './Briefcase/Briefcase';
import Poster from './Poster/Poster';
import Calendar from './Calendar/Calendar';
import Mesh from './Mesh/Mesh';

import './News.css';

const News = () => {
  return (
    <section className="news">
      <h2 className="news__title">Nowości</h2>
      <div className="icons-wrapper">
        <BuisnessCard />
        <Leaflets />
        <Poster />
        <Calendar />
        <Briefcase />
        <Sticker />
        <Banner />
        <Mesh />
        <BuisnessCard />
        <Sticker />
      </div>
    </section>
  );
};
export default News;
