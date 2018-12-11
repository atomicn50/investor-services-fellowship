import axios from 'axios';

const url = 'https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json';

const getData = (month, day, year) => {
  axios.get(`${url}?date=${year}-${month}-${day}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default getData;
