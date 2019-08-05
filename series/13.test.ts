import series from "./13";

test("series 13 first test", () => {
  expect(series([-9, 5, 1, 0])).toBe(0);
});

test("series 13 second test", () => {
  expect(series([3, -2, 6, -1, 8, -6, 2, 0])).toBe(16);
});
