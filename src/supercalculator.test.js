jest.mock('./calculator', () => {
  class MockCalculator {
    constructor() {
      this.subtract = jest.fn();
    }
  }
  return new MockCalculator();
});

const calculator = require('./calculator');
const superCalculator = require('./supercalculator');

test('basic difference calculations', () => {
  calculator.subtract.mockReturnValueOnce(2);
  expect(superCalculator.difference(1, -1)).toBe(2);

  calculator.subtract.mockReturnValueOnce(-2);
  expect(superCalculator.difference(-1, 1)).toBe(2);

  const calls = calculator.subtract.mock.calls;
  expect(calls.length).toBe(2);
  expect(calls[0][0]).toBe(1);
  expect(calls[0][1]).toBe(-1);
  expect(calls[1][0]).toBe(-1);
  expect(calls[1][1]).toBe(1);
});

test('advanced difference calculations', () => {
  // TODO: Test input als undefined, Inifity en null.
  // TODO: Doe dat op een generieke manier.
});
