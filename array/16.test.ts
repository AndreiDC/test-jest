import array from "./16";
test("array 16 first test", () => {
  expect(array(5, [6.75, 6.13, 3.82, 8.75, 1])).toEqual([
    6.75,
    1,
    6.13,
    8.75,
    3.82
  ]);
});
test("array 16 second test", () => {
  expect(array(4, [9.4, 9.87, 8.46, 3.9])).toEqual([9.4, 3.9, 9.87, 8.46]);
});
