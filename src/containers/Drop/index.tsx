import { connect } from 'react-redux';
import Drop from '../../components/Drop/index';

import {
  removeAllPokemon,
  sendTeam,
  generateTeam,
  suggestPokemon,
} from '../../actions/pokemon';

import { saveTeam, changeNameInput } from '../../actions/favorites';

import { toggleInputFav, toggleSuggestion } from '../../actions/boolean';

const mapStateToProps = (state: any) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
  pokemonObject: state.pokemon.pokemonSelectedObject,
  isInputFav: state.boolean.isInputFav,
  isLogged: state.boolean.isLogged,
  nameTeam: state.favorites.name,
});

const mapDispatchToProps = (dispatch: Function) => ({
  clearPokemons: () => {
    dispatch(removeAllPokemon());
  },
  sendTeam: (team: Array<number>) => {
    dispatch(sendTeam(team));
  },
  saveTeam: () => {
    dispatch(saveTeam());
  },
  toggleInputFav: () => {
    dispatch(toggleInputFav());
  },
  changeInputFav: (value: string, key: string) => {
    dispatch(changeNameInput(value, key));
  },
  generateTeam: () => {
    dispatch(generateTeam());
  },
  toggleSuggestion: () => {
    dispatch(toggleSuggestion());
  },
  suggestPokemon: () => {
    dispatch(suggestPokemon());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Drop);
