import array from "./17";
test("array 17 first test", () => {
  let arr = [8.94, 6.6, 3.95, 6.92, 2.89, 2.75, 2.51, 2.81, 9.79];
  expect(
    array(9, [8.94, 6.6, 2.89, 2.75, 9.79, 2.81, 2.51, 6.92, 3.95])
  ).toEqual(arr);
});
test("array 17 second test", () => {
  let arr = [5.11, 8.48, 7.53, 7.58, 8.08, 5.59, 5.53, 8.96, 2.41, 4.03];
  expect(
    array(10, [5.11, 8.48, 8.08, 5.59, 2.41, 4.03, 8.96, 5.53, 7.58, 7.53])
  ).toEqual(arr);
});
