import { twoDigit } from "./16";

test("The integer is a two-digit even number first test ", () => {
  expect(twoDigit(21)).toBe(false);
});

test("The integer is a two-digit even number second test ", () => {
  expect(twoDigit(38)).toBe(true);
});
test("The integer is a two-digit even number second test ", () => {
  expect(twoDigit(7)).toBe(false);
});
