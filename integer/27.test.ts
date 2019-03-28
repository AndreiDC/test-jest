import { findday } from "./27";
test("Find the number of day of week first test", () => {
  expect(findday(313)).toBe(3);
});
test("Find the number of day of week second test", () => {
  expect(findday(4)).toBe(2);
});
