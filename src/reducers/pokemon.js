import { ANALYZE_TEAM } from '../actions/favorites';
import {
  POKEMON_DETAILS,
  INPUT_SEARCH,
  DELETE_SEARCH_INPUT,
  ADD_FILTER_TYPES,
  DELETE_FILTER_TYPES,
  MEMORIZE_POKEMON,
  MEMORIZE_TYPES,
  ADD_SELECTED_POKEMON,
  REMOVE_SELECTED_POKEMON,
  REMOVE_ALL_POKEMON,
  MEMORIZE_RANDOM_TEAM_IDS,
  MEMORIZE_SUGGEST,
  SET_GEN_VALUE,
} from '../actions/pokemon';

const initialState = {
  pokemonList: [],
  pokemonSelected: [],
  pokemonSelectedIds: [],
  pokemonSelectedObject: [],
  teamResistance: [],
  pokedetails: {},
  favorites: [],
  types: [],
  genValue: 0,
  searchInput: '',
  filterTypes: [],
  pokeSuggest: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MEMORIZE_POKEMON:
      return {
        ...state,
        pokemonList: [...action.pokemon],
      };
    case MEMORIZE_TYPES:
      return {
        ...state,
        types: [...action.types],
      };
    case POKEMON_DETAILS:
      return {
        ...state,
        pokedetails: action.pokeDetails,
      };
    case INPUT_SEARCH:
      return {
        ...state,
        searchInput: action.value,
      };
    case DELETE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: '',
      };
    case SET_GEN_VALUE:
      return {
        ...state,
        genValue: action.value,
      };
    case ADD_FILTER_TYPES:
      return {
        ...state,
        filterTypes: [...state.filterTypes, action.value],
      };
    case DELETE_FILTER_TYPES:
      return {
        ...state,
        filterTypes: [...state.filterTypes.filter((type) => type !== action.value)],
      };
    case ADD_SELECTED_POKEMON:
      if (state.pokemonSelected.length >= 6) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        pokemonSelected: [...state.pokemonSelected, state.pokemonList.find((pokemon) => (
          pokemon.id === action.id
        ))],
        pokemonSelectedObject: [...state.pokemonSelectedObject, {
          [String(action.id)]: action.ability,
        }],
        pokemonSelectedIds: [...state.pokemonSelectedIds, action.id],
      };
    case REMOVE_SELECTED_POKEMON: {
      if (state.pokemonSelected.length <= 0) {
        return {
          ...state,
        };
      }
      const newArray = [...state.pokemonSelected];
      const newArrayIds = [...state.pokemonSelectedIds];
      const newArrayObject = [...state.pokemonSelectedObject];
      newArray.splice(action.index, 1);
      newArrayIds.splice(action.index, 1);
      newArrayObject.splice(action.index, 1);
      return {
        ...state,
        pokemonSelected: [...newArray],
        pokemonSelectedIds: [...newArrayIds],
        pokemonSelectedObject: [...newArrayObject],
      };
    }
    case REMOVE_ALL_POKEMON:
      return {
        ...state,
        pokemonSelected: [],
        pokemonSelectedIds: [],
        pokemonSelectedObject: [],
      };
    case ANALYZE_TEAM:
      return {
        ...state,
        pokemonSelected: [...action.team],
        pokemonSelectedIds: [...action.ids],
      };
    case MEMORIZE_RANDOM_TEAM_IDS: {
      const newArrayObject = [];
      action.ids.forEach((id) => {
        newArrayObject.push({ [id]: '' });
      });
      return {
        ...state,
        pokemonSelected: [...action.team],
        pokemonSelectedIds: [...action.ids],
        pokemonSelectedObject: [...newArrayObject],
      };
    }
    case MEMORIZE_SUGGEST:
      return {
        ...state,
        pokeSuggest: [...action.suggested],
      };
    default:
      return state;
  }
};

export default reducer;
