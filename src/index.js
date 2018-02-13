const calculator = require('./calculator');
const superCalculator = require('./supercalculator');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'web')));

app.get('/add', (req, res) => {
  const result = calculator.add(parseInt(req.query.a, 10), parseInt(req.query.b, 10));
  res.json({ result });
});

app.get('/sub', (req, res) => {
  const result = calculator.subtract(req.query.a, req.query.b);
  res.json({ result });
});

app.get('/diff', (req, res) => {
  const result = superCalculator.difference(req.query.a, req.query.b);
  res.json({ result });
});

module.exports = app.listen(3000);
