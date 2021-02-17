import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SearchInput = ({ value, inputSearch, deleteInput }: {
  value: string,
  inputSearch: Function,
  deleteInput: Function,
}) => {
  const handleChange = (evt: { target: { value: string; }; }) => {
    inputSearch(evt.target.value);
  };
  const handleClick = () => {
    deleteInput();
  };
  return (
    <div className="search-container">
      <input
        className="search-container-input"
        type="text"
        id="name"
        placeholder="Chercher un Pokémon"
        value={value}
        onChange={handleChange}
      />
      <button
        type="button"
        className="search-container-button"
        onClick={handleClick}
      >
        X
      </button>
    </div>
  );
};

SearchInput.propType = {
  value: PropTypes.string.isRequired,
  inputSearch: PropTypes.func.isRequired,
};

export default SearchInput;
