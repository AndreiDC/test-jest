const [{ lenAC }, { lenBC }, { sumLen }] = require("./17.js");

test("return length betwen a and c ", () => {
  expect(lenAC(6.4, 2.8)).toBe(3.6);
});

test("return length betwen b and c ", () => {
  expect(lenBC(2.4, 2.8)).toBe(0.4);
});

test("return sum of thes lengths", () => {
  expect(sumLen(3.60,0.4)).toBe(4.0);
});
