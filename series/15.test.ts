import series from "./15";
test("series 15 first test", () => {
  expect(series([4, 8, 7, 7, 7, 8, 3, 1, 4, 0], 6)).toEqual(2);
});

test("series 15 second test", () => {
  expect(series([3, 5, 3, 3, 5, 1, 5, 5, 5, 0], 5)).toEqual(0);
});
