import array30 from "./30";

test("I test, array 30 find the order numbers of array elements that are greater that their right neighbor", () =>
  expect(array30(6, [2.23, -3.52, -3.59, -3.24, -6.08, 0.98])).toEqual([
    3,
    [1, 2, 4]
  ]));

test("II test, array 30 find the order number of array elements that are greather that their right neighbor", () =>
  expect(array30(4, [7.96, -8.58, 0.09, 8.69])).toEqual([1, [1]]));
