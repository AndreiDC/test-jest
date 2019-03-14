const { changeVal } = require("./24.js");

test("change value ", () => {
  const expected = [0.18, 7.82, 9.2];
  expect(changeVal(9.2, 0.18, 7.82)).toEqual(expected); // use toEqual
});
