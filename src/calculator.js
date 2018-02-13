
class Calculator {

  add (a, b) {
    return a + b;
  }

  subtract (a, b) {
    return a - b;
  }

  difference (a, b) {
    Number.abs(this.subtract(a, b));
  }

}

module.exports = new Calculator();
