
class Calculator {

  add (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('You can\'t add strings.')
    }
    if (a < 0 || b < 0) {
      throw new Error('You can\'t add numbers smaller then 0.')
    }
    return a + b;
  }

  subtract (a, b) {
    return a - b;
  }

}

module.exports = new Calculator();
