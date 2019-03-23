import { findDay } from "./24";

test("Find the number of day of week first test", () => {
  expect(findDay(62)).toEqual(6);
});
test("Find the number of day of week second test", () => {
  expect(findDay(5)).toEqual(5);
});
test("Find the number of day of week third test", () => {
  expect(findDay(135)).toEqual(2);
});
