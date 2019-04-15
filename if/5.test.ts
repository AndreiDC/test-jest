import { amount } from "./5";

test(" return amount first test", () => {
  expect(amount(-16, 7, -2)).toEqual([1, 2]);
});

test(" return amount second test", () => {
  expect(amount(0, 0, 0)).toEqual([0, 0]);
});
