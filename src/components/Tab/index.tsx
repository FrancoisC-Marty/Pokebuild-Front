import React from 'react';
import PropTypes from 'prop-types';

import cornerLight from '../../assets/cornertab.png';
import cornerDark from '../../assets/cornertab-dark.png';
import scoring from '../../assets/satisfaction.svg';

import TdHead from './TdHead';
import TrRows from './TrRows';
import TrScore from './TrScore';

import { Pokemon } from '../../type/index';
import { Resistances } from '../../type/Resistances';

import randomKey from '../../utils/randomizer';
import { findPokemonDetails } from '../../selectors/pokemon';
import './style.scss';

const Tab = (
  {
    types,
    pokemonSelected,
    pokemonSelectedObject,
    teamResistances,
    isDarkMode,
    pokemonDetails,
    toggleDetails,
    state,
  }: {
    types: Array<{
      name: string,
      image: string,
   }>,
   pokemonSelected: Array<Pokemon>,
   pokemonSelectedObject: Array<{
    id: string,
  }>,
   teamResistances: Resistances,
   isDarkMode: boolean,
   pokemonDetails: Function,
   toggleDetails: Function,
   state: any,
   },
) => {
  let corner: string;
  if (isDarkMode) {
    corner = cornerDark;
  }
  else {
    corner = cornerLight;
  }

  const abilities: Array<{
    damage_relation: string,
    damage_multiplier: number,
  }> = [];

  // console.log(pokemonSelectedObject);

  pokemonSelected.forEach((pokemon, index) => {
    if (pokemonSelectedObject[index][pokemon.id] !== '') {
      abilities.push(pokemon.apiResistancesWithAbilities);
    }
    else {
      abilities.push(pokemon.apiResistances);
    }
  });

  return (
    <div className="tab-container">
      <table className="tab">
        <thead className="tab-head">
          <tr className="tab-head--tr">
            <td className="tab-head--type">
              <img className="tab-head--corner" src={corner} alt="corner" />
              <div className="tab-head--type-def1">Types</div>
              <div className="tab-head--type-def2">Pokémon</div>
            </td>
            {types.map((currentType) => (
              <TdHead key={currentType.name} {...currentType} />
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {pokemonSelected.map((chosenPokemon) => {
              const handleDetails = (): void => {
                pokemonDetails(findPokemonDetails(state, chosenPokemon.id));
                toggleDetails();
              };
              return (
                <td
                  key={randomKey(0, 1000000)}
                  className="tab-head--sprites"
                  onClick={handleDetails}
                >
                  <img className="tab-head--sprites_image" src={chosenPokemon.image} alt={chosenPokemon.name} />
                </td>
              );
            })}
            <td className="tab-head--sprites"><img className="tab-head--sprites-scoring" src={scoring} alt="score final" /></td>
          </tr>
          {types.map((currentType: {name: string, image: string}, index: number) => (
            <tr key={randomKey(1000000, 2000000)}>
              {abilities.map((ability: {
                damage_relation: string,
                damage_multiplier: number,
              }) => (
                <TrRows
                  key={randomKey(1000000, 3000000)}
                  ability={ability}
                  index={index}
                />
              ))}
              <TrScore
                key={randomKey(1000000, 3000000)}
                score={teamResistances[currentType.name]}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Tab.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  pokemonSelected: PropTypes.arrayOf(PropTypes.shape({
    apiResistances: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      damage_multiplier: PropTypes.number.isRequired,
      damage_relation: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  pokemonSelectedObject: PropTypes.array.isRequired,
  teamResistances: PropTypes.object.isRequired,
  isDarkmode: PropTypes.bool.isRequired,
  pokemonDetails: PropTypes.func.isRequired,
  toggleDetails: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default Tab;
