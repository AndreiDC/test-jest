import series from "./19";

test("series 19 first test", () => {
  expect(series([4, 1, 4, 6, 5, 3, 2, 3], 8)).toEqual([[1, 5, 3, 2], 4]);
});
test("series 19 second test", () => {
  expect(series([8, 8, 3, 5, 9, 6, 1, 8], 8)).toEqual([[3, 6, 1], 3]);
});
