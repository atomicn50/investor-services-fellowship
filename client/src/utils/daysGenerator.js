import { generateValues, generateOptions } from './general';

const generateDays = (startDay, endDay) => {
  const daysArray = [];

  while(startDay <= endDay) {
    daysArray.push(startDay++);
  }
  return daysArray;
}

const days = generateDays(1, 31);
const daysValues = generateValues(1, 31);
const daysArray = generateOptions(days, daysValues, 'Select Day');

export default daysArray;