import isPositive from "./2";

test("sould return the ansver first test", () => {
  expect(isPositive(-4)).toBe(2);
  expect(isPositive(0)).toBe(6);
  expect(isPositive(15)).toBe(7);
});
