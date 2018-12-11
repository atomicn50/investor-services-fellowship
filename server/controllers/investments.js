const axios = require('axios');

const url = 'https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json';

const getUrl = (month, day, year) => {
  return `${url}?date=${year}-${month}-${day}`;
}

exports.getInvestmentData = (month, day, year, callback) => {
  axios.get(getUrl(month, day, year))
    .then(res => callback(null, res))
    .catch(err => callback(err))
}
