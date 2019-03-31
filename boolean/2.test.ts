import { numAdd } from "./2";

test("verify if number is add first test", () => {
  expect(numAdd(80)).toBe(false);
});

test("verify if number is add second test", () => {
  expect(numAdd(81)).toBe(true);
});
