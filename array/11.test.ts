import { array } from "./11";

test("Do not use conditional statements first test", () => {
  let arr = [2.2, 4.82, 2.2, 7.83, 9.73, 0.24, 1.46];
  let arr1 = [4.82, 7.83, 0.24];
  expect(array(7, arr, 2)).toEqual(arr1);
});
test("Do not use conditional statements second test", () => {
  expect(array(8, [1.81, 4.65, 6.5, 1.32, 3.27, 5.28, 3.15, 6.62], 2)).toEqual([
    4.65,
    1.32,
    5.28,
    6.62
  ]);
});
