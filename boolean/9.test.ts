import { oneNumber } from "./9";

test(" verify if one number is add first test ", () => {
  expect(oneNumber(2, 8)).toBe(false);
});
test(" verify if one number is add second test ", () => {
  expect(oneNumber(1, 8)).toBe(true);
});
test(" verify if one number is add thre test ", () => {
  expect(oneNumber(1, 9)).toBe(true);
});
