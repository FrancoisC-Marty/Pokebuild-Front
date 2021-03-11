import React from 'react';

import logo from '../../assets/404.svg';

import './style.scss';

const NotFound = () => (
  <div className="notfound">
    <img className="notfound-image" src={logo} alt="404" />
    <div className="notfound-text">
      <h2 className="notfound-text--title">Le site est down suite à l'incendie chez OVH</h2>
      <h3 className="notfound-text--sub">Nous reviendrons en ligne aussi vite que possible</h3>
    </div>
  </div>
);

export default NotFound;
