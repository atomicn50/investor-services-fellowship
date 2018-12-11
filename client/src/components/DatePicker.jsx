import React from 'react';
import Options from './Options.jsx';
import monthsArray from '../utils/monthsGenerator';
import daysArray from '../utils/daysGenerator';

const DatePicker = ({ handleChange, handleClick }) => (
  <div>
    Month
    <Options id={'month'} options={monthsArray} handleChange={handleChange} />
    Day
    <Options id={'day'} options={daysArray} handleChange={handleChange} />
    Year
    <input placeholder='Enter Year' id={'year'} onChange={handleChange} />
    <button type='submit' onClick={handleClick}>Search</button>
  </div>
);

export default DatePicker;