import { threeDigit } from "./17";

test("The integer is a threeDigit even number first test ", () => {
  expect(threeDigit(21)).toBe(false);
});

test("The integer is a threeDigit even number second test ", () => {
  expect(threeDigit(123)).toBe(true);
});
test("The integer is a threeDigit even number second test ", () => {
  expect(threeDigit(284)).toBe(false);
});
