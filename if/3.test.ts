import anInteger from "./3";

test(" retun ansver first test ", () => {
  expect(anInteger(-3)).toBe(3);
  expect(anInteger(0)).toBe(10);
  expect(anInteger(8)).toBe(0);
});
