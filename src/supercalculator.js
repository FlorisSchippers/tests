const calculator = require('./calculator');

class SuperCalculator {
  difference (a, b) {
    return Math.abs(calculator.subtract(a, b));
  }
}

module.exports = new SuperCalculator();