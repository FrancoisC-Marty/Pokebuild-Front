import React from 'react';
import PropTypes from 'prop-types';

const TrRows = (
  {
    ability,
    index,
  }: {
    ability: {
      damage_relation: string,
      damage_multiplier: number,
    },
    index: number,
  },
) => (
  <td
    className={`tab-head--def tab-head--def_${ability[index].damage_relation}`}
  >
    {ability[index].damage_multiplier}
  </td>
);

TrRows.propTypes = {
  ability: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default TrRows;
