import array31 from "./31";

test("I test array 31 find the order number of array elements that are greater that their left neighbor ", () => {
  expect(
    array31(10, [-0.53, 8.63, -3.26, 4.35, 2.69, 4.4, -9.17, -3.86, -6.1, 8.15])
  ).toEqual([[10, 8, 6, 4, 2], 5]);
});
test("II test array 31 find the order number of array elements that are greater that their left neighbor ", () => {
  expect(
    array31(8, [9.91, 4.37, -7.2, 6.11, 7.47, 5.21, -0.32, 1.01])
  ).toEqual([[8, 5, 4], 3]);
});
