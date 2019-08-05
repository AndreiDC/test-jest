import series from "./14";

test("series 14 firs test ", () => {
  expect(series([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(6);
});
test("series 14 second test ", () => {
  expect(series([6, 9, 7, 6, 0], 7)).toBe(2);
});
