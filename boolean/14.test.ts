import { exactlyOne } from "./14";

test("Exactly one of the numbers first test ", () => {
  expect(exactlyOne(0, 2, 4)).toBe(false);
});
test("Exactly one of the numbers second test ", () => {
  expect(exactlyOne(5, -2, 8)).toBe(false);
});
test("Exactly one of the numbers three test ", () => {
  expect(exactlyOne(-3, -4, 6)).toBe(true);
});
