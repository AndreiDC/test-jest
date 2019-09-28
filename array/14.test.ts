import { array } from "./14";

test("First the order of the index appears then the odd ones first test ", () => {
  expect(array(4, [2.86, 1.96, 9, 2.53])).toEqual([1.96, 2.53, 2.86, 9]);
});

test("First the order of the index appears then the odd ones second test ", () => {
  expect(array(5, [9.04, 1.18, 3.64, 9.94, 8.09])).toEqual([
    1.18,
    9.94,
    9.04,
    3.64,
    8.09
  ]);
});
