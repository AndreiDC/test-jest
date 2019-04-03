import { eachposit } from "./12";

test("Each of the numbers a,c,b is positive first test", () => {
  expect(eachposit(2, 3, 5)).toBe(true);
});
test("Each of the numbers a,c,b is positive second test", () => {
  expect(eachposit(2, -3, 5)).toBe(false);
});
test("Each of the numbers a,c,b is positive three test", () => {
  expect(eachposit(2, -3, -5)).toBe(false);
});
