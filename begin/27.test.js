const [{ powA2 }, { powA4 }, { powA8 }] = require("./27.js");

test("return a pow 2", () => {
  expect(powA2(2.5)).toEqual(6.25);
});
test("return a pow 4", () => {
  expect(powA4(2.5)).toEqual(39.06);
});
test(" retur na pow 8", () => {
  expect(powA8(2.5)).toEqual(1525.88);
});
