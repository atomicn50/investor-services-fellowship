import {generateValues, generateOptions } from './general';

const generateMonths = (startMonth, numberOfMonths) => {
  const months = {
    1: 'JAN',
    2: 'FEB',
    3: 'MAR',
    4: 'APR',
    5: 'MAY',
    6: 'JUN',
    7: 'JUL',
    8: 'AUG',
    9: 'SEP',
    10: 'OCT',
    11: 'NOV',
    12: 'DEC',
  }
  const monthsArray = [];
  
  while (numberOfMonths) {
    monthsArray.push(months[startMonth++]);
    numberOfMonths -= 1;
  }
  return monthsArray;
}

const months = generateMonths(1, 12);
const monthValues = generateValues(1, 12);
const monthsArray = generateOptions(months, monthValues, 'Select Month');

export default monthsArray;
