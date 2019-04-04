import { digitNum } from "./20";

test("All digits of the number are different first test", () => {
  expect(digitNum(996)).toBe(false);
});
test("All digits of the number are different second test", () => {
  expect(digitNum(777)).toBe(false);
});
test("All digits of the number are different three test", () => {
  expect(digitNum(123)).toBe(true);
});
