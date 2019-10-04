import React from 'react';
import './News.css';
import Leaflets from '../Leaflets/Leaflets';
import Banner from '../Banner/Banner';
import BuisnessCard from '../BuisnessCard/BuisnessCard';
import Sticker from '../Sticker/Sticker';
import Briefcase from '../Briefcase/Briefcase';
import Poster from '../Poster/Poster';
import Calendar from '../Calendar/Calendar';
import Mesh from '../Mesh/Mesh';

class News extends React.Component {
  render() {
    let Icons = null;
    if (window.innerWidth <= 480) {
      Icons = (
        <div className="icons-wrapper icons-mobile">
          <Leaflets />
          <Banner />
          <BuisnessCard />
          <Sticker />
        </div>
      );
    }
    if (window.innerWidth > 480) {
      Icons = (
        <div className="icons-wrapper icons-desktop">
          <BuisnessCard />
          <Leaflets />
          <Poster />
          <Calendar />
          <Briefcase />
          <Sticker />
          <Banner />
          <Mesh />
        </div>
      );
    }
    return (
      <section className="news">
        <h2 className="news__title">Nowości</h2>
        {Icons}
      </section>
    );
  }
}
export default News;
