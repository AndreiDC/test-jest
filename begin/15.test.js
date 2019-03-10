const [{ cirDiam }, { lenCirc }] = require("./15.js");

test("return diameter circle", () => {
  expect(cirDiam(19.11)).toBe(4.93);
});
test("return length circumference", () => {
  expect(lenCirc(cirDiam(19.11))).toBe(15.48);
});
