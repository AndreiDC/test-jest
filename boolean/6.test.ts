import { douInequality } from "./6";

test(" verify double first test ", () => {
  expect(douInequality(23, 30, 43)).toBe(true);
});
test(" verify double second test ", () => {
  expect(douInequality(23, 20, 43)).toBe(false);
});
