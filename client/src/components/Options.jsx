import React from 'react';

const Options = ({ id, options, handleChange }) => {
  return (
    <select id={id} onChange={handleChange}>
      {options.map(option => <option value={option[0]}>{option[1]}</option>)}
    </select>
  );
}

export default Options;
