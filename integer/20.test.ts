import { fullHours } from "./20";

test(" full hours passed from the beginning of the day", () => {
  expect(fullHours(26054)).toBe(7);
});
test(" full hours passed from the beginning of the day", () => {
  expect(fullHours(25045)).toBe(6);
});
