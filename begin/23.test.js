const chaVal = require("./23.js");

test("Change values of the variables", () => {
  const expected = [8.06, 7.15, 6.62];
  expect(chaVal(7.15,6.62,8.06)).toEqual(expected);
});
