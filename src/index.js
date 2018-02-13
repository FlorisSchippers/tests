const calculator = require('./calculator');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'web')));

app.get('/add', (req, res) => {
  const result = calculator.add(req.query.a, req.query.b);
  res.json({ result });
});

app.get('/sub', (req, res) => {
  const result = calculator.subtract(req.query.a, req.query.b);
  res.json({ result });
});

app.get('/diff', (req, res) => {
  const result = calculator.difference(req.query.a, req.query.b);
  res.json({ result });
});

app.listen(3000);