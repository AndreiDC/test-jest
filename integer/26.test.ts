import { findDay } from "./26";

test(" find day of week  first test ", () => {
  expect(findDay(3)).toBe(4);
});

test(" find day of week second test ", () => {
  expect(findDay(5)).toBe(6);
});
