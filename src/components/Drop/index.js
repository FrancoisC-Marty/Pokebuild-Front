import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

const Drop = ({ pokemonSelected }) => (
  <div className="home-selection">
    {/* <h2 className="home-selection-title">
      Choisissez 6 pokémons depuis le tiroir
    </h2> */}
    <div className="home-selection-drops">
      <div className="home-selection-drop">
        <div className="home-selection-drop-content">
          <img className="home-selection-drop-content-sprite" src={pokemonSelected[0].sprite} alt={pokemonSelected.name} />
        </div>
      </div>
      <div className="home-selection-drop">
        <div className="home-selection-drop-content">
          <img className="home-selection-drop-content-sprite" src={pokemonSelected[1].sprite} alt={pokemonSelected.name} />
        </div>
      </div>
      <div className="home-selection-drop">
        <div className="home-selection-drop-content">
          <img className="home-selection-drop-content-sprite" src={pokemonSelected[2].sprite} alt={pokemonSelected.name} />
        </div>
      </div>
      <div className="home-selection-drop">
        <div className="home-selection-drop-content">
          <img className="home-selection-drop-content-sprite" src={pokemonSelected[3].sprite} alt={pokemonSelected.name} />
        </div>
      </div>
      <div className="home-selection-drop">
        <div className="home-selection-drop-content">
          <img className="home-selection-drop-content-sprite" src={pokemonSelected[4].sprite} alt={pokemonSelected.name} />
        </div>
      </div>
      <div className="home-selection-drop">
        <div className="home-selection-drop-content">
          <img className="home-selection-drop-content-sprite" src={pokemonSelected[5].sprite} alt={pokemonSelected.name} />
        </div>
      </div>
    </div>
  </div>
);

Drop.propTypes = {
  pokemonSelected: PropTypes.arrayOf(PropTypes.shape({
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Drop;
