import React from 'react';

import Card from '../Card';
import TechnoItem from '../TechnoItem';

import about from '../../data/about';
import technos from '../../data/techno';

import './style.scss';

const About = () => (
  <div className="about">
    <div className="cards">
      {about.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
    <a
      className="api-link"
      href="https://pokebuildapi.fr/"
      target="_blank"
      rel="noreferrer noopener"
    >
      {'Lien vers notre api custom\n(Ouvre un nouvel onglet)'}
    </a>
    <div className="techno">
      <h2 className="techno-title">Liste des technos utilisées</h2>
      <ul className="techno-list">
        {technos.map((techno) => (
          <TechnoItem key={techno.id} {...techno} />
        ))}
      </ul>
    </div>
  </div>
);

export default About;
