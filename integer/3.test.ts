import { fulKby } from "./3";

test(" return byte in Kbyte ", () => {
  expect(fulKby(12901)).toBe(12);
});
