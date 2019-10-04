import React from 'react';

import Icon from '../../../assets/Banner.svg';
import MeshBG from '../../../assets/Mesh.svg';

import './Mesh.css';

const Mesh = () => (
  <section className="wrapper">
    <figure className="icon">
      <div className="icon__wrapper banner">
        <MeshBG className="mesh" />
        <Icon className="icon__svg banner-icon" />
      </div>

      <figcaption className="icon__title">Siatka mesh</figcaption>
    </figure>
  </section>
);

export default Mesh;
