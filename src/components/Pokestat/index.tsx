import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import StatDetails from './StatDetails';
import TypeDetail from '../../containers/Pokestat/TypeDetail';

import './style.scss';

const Pokestat = ({
  toggleDetails,
  pokemon,
  addPokemon,
  toggleSuggestion,
  isSuggestion,
  isDrawer,
}: {toggleDetails: Function,
  pokemon: {
    id: number,
    name: string,
    image: string,
    sprite: string,
    stats: Array<number>,
    apiTypes: Array<{
      name: string,
      image: string,
    }>,
    apiGeneration: number,
    resistanceModifyingAbilitiesForApi: Array<string>,
  },
 addPokemon: Function,
 toggleSuggestion: Function,
 isSuggestion: boolean,
 isDrawer: boolean,
}) => {
  const {
    id,
    name,
    image,
    stats,
    apiTypes,
  } = pokemon;
  const [isAnimation, setIsAnimation] = useState(false);
  const [isAbilities, setIsAbilities] = useState(false);
  const handleClose = (): void => {
    setIsAnimation(true);
    setTimeout(() => {
      toggleDetails();
    }, 250);
  };
  const handleAdd = (evt: any): void => {
    evt.preventDefault();
    handleClose();
    if (isSuggestion) {
      toggleSuggestion();
    }
    setTimeout(() => addPokemon(id, evt.target[0].value), 150);
  };

  const abilities = [];

  const abilitiesApi = pokemon.resistanceModifyingAbilitiesForApi;

  useEffect(() => {
    if (abilitiesApi.length !== 0) {
      setIsAbilities(true);
    }
  }, []);

  if (isAbilities) {
    abilities.push(abilitiesApi);
  }

  return (
    <div className={classNames('pokestat', { 'pokestat--animation': isAnimation })}>
      <div className={classNames('pokestat-container', { 'pokestat-container--drawer': isDrawer })}>
        <button type="button" className="pokestat-container--button" onClick={handleClose}>X</button>
        <section className="pokestat-container--image">
          <div className="pokestat-container--image_infos">
            <h2 className="pokestat-name">{`#${id} ${name}`}</h2>
            <div className="pokestat-container--image_section">
              {apiTypes.map((type: {name: string, image: string}) => (
                <TypeDetail
                  key={type.name}
                  close={handleClose}
                  {...type}
                />
              ))}
            </div>
          </div>
          <img className="pokestat-image" src={image} alt={`${name}.png`} />
        </section>
        <section className="pokestat-infos">
          <form onSubmit={handleAdd}>
            {isAbilities && (
              <select className="pokestat-abilities">
                <option value="">Comp Spé</option>
                {abilities.map((ability) => (
                  <option key={ability.name} value={ability.slug}>{ability.name}</option>
                ))}
              </select>
            )}
            <button
              type="submit"
              className={classNames('pokestat-infos-addButton', { 'pokestat-infos-addButton--abilities': isAbilities })}
              // onClick={handleAdd}
            >
              Ajouter à votre équipe
            </button>
          </form>
          <div className="pokestat-details">
            {
            Object.entries(stats).map(([statName, statValue]: [string, number]) => {
              const width = (statValue / 255) * 100;
              return (
                <StatDetails
                  key={statName}
                  statName={statName}
                  statValue={statValue}
                  width={width}
                />
              );
            })
            }
          </div>
        </section>
      </div>
    </div>
  );
};

Pokestat.propTypes = {
  toggleDetails: PropTypes.func.isRequired,
  pokemon: PropTypes.object.isRequired,
  addPokemon: PropTypes.func.isRequired,
  toggleSuggestion: PropTypes.func.isRequired,
  isSuggestion: PropTypes.bool.isRequired,
  isDrawer: PropTypes.bool.isRequired,
};

export default Pokestat;
