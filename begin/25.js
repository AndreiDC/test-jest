const { findY } = require("./25.js");

test("Given an independent variable x, find the value y", () => {
  expect(findY(2.15)).toBe(261.58);
});
test("Given an independent variable x, ", () => {
  expect(findY(2.52)).toBe(723.19);
});
