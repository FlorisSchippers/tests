const calculator = require('./calculator');

class SuperCalculator {
  difference (a, b) {
    Number.abs(calculator.subtract(a, b));
  }
}

module.exports = new SuperCalculator();