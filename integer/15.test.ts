import { threeDigit } from "./15";

test(" 123 will be changed to 213", () => {
  expect(threeDigit(123)).toBe(213);
});

test(" 145 will be changed to 415", () => {
  expect(threeDigit(123)).toBe(213);
});
