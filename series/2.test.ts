import series from "./2";

test("series 2 first test", () => {
  expect(series([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(3628800);
});
test("series 2 second test", () => {
  expect(series([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(3628800);
});
