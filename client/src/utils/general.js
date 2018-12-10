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

const generateOptions = (options, values, firstOption) => {
  const optionsArray = [['', firstOption]];
  options.forEach((elem, index) => {
    optionsArray.push([values[index], elem]);
  });
  return optionsArray;
}

export {
  convertNumberToString,
  generateValues,
  generateOptions,
}