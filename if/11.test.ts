import { newValues } from "./11";

test(" return large value or zero first test", () => {
  expect(newValues(27, 27)).toEqual([0, 0]);
});
test(" return large value or zero second test", () => {
  expect(newValues(42, 33)).toEqual([42, 42]);
});
