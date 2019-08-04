import series from "./9";

test("series 9  first test", () => {
  expect(series([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([[1, 3, 5, 7, 9], 5]);
});
