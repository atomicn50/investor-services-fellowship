const convertNumberToString = (number) => {
  if (number < 10) {
    return `0${number.toString()}`;
  } else {
    return number.toString();
  }
}

const generateValues = (startValue, numberOfValues) => {
  const values = [];
  while (numberOfValues) {
    values.push(convertNumberToString(startValue++));
    numberOfValues -= 1;
  }
  return values;
}

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

const generateOptions = () => {
  const months = generateMonths(1, 12);
  const values = generateValues(1, 12);
  const options = [['', 'Select Month']];
  months.forEach((month, index) => {
    options.push([values[index], month]);
  });
  return options;
}

const optionsArray = generateOptions();

export default optionsArray;