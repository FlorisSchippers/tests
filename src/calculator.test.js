const calculator = require('./calculator');

test('sum of 1 and 2 is 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('that it checks for bad input', () => {
  expect.assertions(3);

  try {
    calculator.add('1', 2);
  } catch (err) {
    expect(err.message).toBe('You can\'t add strings.');
  }

  try {
    calculator.add(1, '2');
  } catch (err) {
    expect(err.message).toBe('You can\'t add strings.');
  }

  try {
    calculator.add('1', '2');
  } catch (err) {
    expect(err.message).toBe('You can\'t add strings.');
  }
});

test('various sums', () => {
  // TODO: Test 5 + 5 = 10
  // TODO: Test 5 + -5 = 0
  // TODO: Test nog 10 andere optellingen op een generieke manier.
  // TODO: Test Infinity + 1 = ???
});
