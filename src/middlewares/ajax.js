/* eslint-disable no-console */
/* eslint-disable default-case */
import axios from 'axios';

import {
  GET_POKEMON,
  memorizePokemon,
  GET_TYPES,
  memorizeTypes,
} from '../actions/pokemon';

const ajax = (store) => (next) => (action) => {
  axios.defaults.baseURL = 'http://ec2-3-83-51-192.compute-1.amazonaws.com/api/v1/';
  switch (action.type) {
    case GET_POKEMON:
      axios.get('pokemon')
        .then((response) => {
          store.dispatch(memorizePokemon(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    case GET_TYPES:
      axios.get('types')
        .then((response) => {
          store.dispatch(memorizeTypes(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
  }
  next(action);
};

export default ajax;
