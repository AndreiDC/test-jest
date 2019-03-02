const {area} = require('./2');

test('return correct cod', () => {
  expect(area(2)).toBe(4);
  expect(area(4)).toBe(16);
});