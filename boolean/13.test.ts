import { oneNumber } from "./13";

test("at least one the number first test ", () => {
  expect(oneNumber(-2, 3, -5)).toBe(true);
});
test("at least one the number second test ", () => {
  expect(oneNumber(2, 3, -5)).toBe(true);
});
test("at least one the number three test ", () => {
  expect(oneNumber(-2, -3, -5)).toBe(false);
});
test("at least one the number the fourth  test ", () => {
  expect(oneNumber(0, 0, 0)).toBe(false);
});
