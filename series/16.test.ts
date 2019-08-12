import series from "./16";

test(" series 16 first test", () => {
  expect(series([6, 8, 8, 7, 0, 0, 4, 0], 6)).toBe(4);
});

test("series 16 second test", () => {
  expect(series([3, 2, 3, 8, 0], 7)).toBe(4);
});

test("series 16 third test", () => {
  expect(series([1, 2, 3, 4, 5, 6], 7)).toBe(0);
});
