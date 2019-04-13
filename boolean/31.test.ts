import isIsoscel from "./31";

test(" verifly if triangle is isosceles first test", () => {
  expect(isIsoscel(20, 20, 5)).toBe(true);
});

test(" verifly if triangle is isosceles second test ", () => {
  expect(isIsoscel(20, 10, 5)).toBe(false);
});
