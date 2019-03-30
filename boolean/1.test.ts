import { isPositive } from "./1";

test("verify is number is positive first test ", () => {
  expect(isPositive(99)).toBe(true);
});
test("verify is number is positive second test", () => {
  expect(isPositive(-99)).toBe(false);
});
