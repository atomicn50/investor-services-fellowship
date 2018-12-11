const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers/investments');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/investments', (req, res) => {
  const { month, day, year } = req.query;
  controllers.getInvestmentData(month, day, year, (err, response) => {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.status(200).send(response.data);
  })
});

app.listen(PORT, () => {console.log(`Listening at localhost on port: ${PORT}`)})