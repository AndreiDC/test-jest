const {volCube,areCube} = require('./5.js');

test('Return volume cube', () => {
  expect(volCube(7)).toBe(343.000);
}),
test('Return area cube', () => {
    expect(areCube(7)).toBe(294.000);
  });