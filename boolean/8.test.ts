import { between } from "./8";

test(" verify if number b betwen a a and b 1 ", () => {
  expect(between(86, 42, 48)).toBe(false);
});

test(" verify if number b betwen a a and b 2 ", () => {
  expect(between(53, 66, 83)).toBe(true);
});
test(" verify if number b betwen a a and b 3 ", () => {
  expect(between(11, 50, 43)).toBe(false);
});
test(" verify if number b betwen a a and b 4 ", () => {
  expect(between(95, 76, 93)).toBe(false);
});
