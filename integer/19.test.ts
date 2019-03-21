import { fullMinutes } from "./19";

test(" return time in minutes from beginning of the day ", () => {
  expect(fullMinutes(2666)).toBe(44);
});
test(" return time in minutes from beginning of the day nex example ", () => {
  expect(fullMinutes(4267)).toBe(71);
});
