import isInteger from "./1";

test("verify is positive number firs test", () => {
  expect(isInteger(0)).toBe(0);
  expect(isInteger(11)).toBe(3);
  expect(isInteger(-9)).toBe(-9);
  expect(isInteger(-5)).toBe(-5);
});
