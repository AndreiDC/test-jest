import array from "./22";
test("array 23 first test", () => {
  expect(array([6.14, 2.94, 4.34, 2.62, 2.73, 2.33, 3.7], 7, 2, 5)).toBe(4.06);
});

test("array 23 second test", () => {
  expect(array([7.95, 4.87, 8.81], 3, 2, 3)).toBe(7.95);
});
