const { addNumbers } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(addNumbers(1, 2)).toBe(3);
});

test('adds 1 + 2 not equal 4', () => {
  expect(addNumbers(1, 2)).not.toBe(4);
});

test('adds 0 + 0 to equal 0', () => {
  expect(addNumbers(0, 0)).toBe(2);
});
