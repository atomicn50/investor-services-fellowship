import axios from 'axios';

const getData = (month, day, year, callback) => {
  axios.get('/api/investments', {
    params: {
      month, 
      day,
      year,
    }
  })
    .then(res => callback(null, res))
    .catch(err => callback(err))
}

export default getData;