import { retHandrDigit } from "./17";

test(" return handred digit in the number ", () => {
  expect(retHandrDigit(21433)).toBe(4);
});

test(" return handred digit in the number 1 ", () => {
  expect(retHandrDigit(21533)).toBe(5);
});
