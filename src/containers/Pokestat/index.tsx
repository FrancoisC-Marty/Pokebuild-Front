import { connect } from 'react-redux';
import Pokestat from '../../components/Pokestat';

import { toggleDetails, toggleSuggestion } from '../../actions/boolean';
import { addSelectedPokemon, addFilterTypes } from '../../actions/pokemon';
import { switchFilter } from '../../actions/types';

const mapStateToProp = (state: any) => ({
  pokemon: state.pokemon.pokedetails,
  isDrawer: state.boolean.isDrawer,
  isSuggestion: state.boolean.isSuggestion,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleDetails: () => {
    dispatch(toggleDetails());
  },
  addPokemon: (id: number, ability: string) => {
    dispatch(addSelectedPokemon(id, ability));
  },
  addFilterTypes: (type: string) => {
    dispatch(addFilterTypes(type));
  },
  switchFilter: (value: string, key: string) => {
    dispatch(switchFilter(value, key));
  },
  toggleSuggestion: () => {
    dispatch(toggleSuggestion());
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(Pokestat);
