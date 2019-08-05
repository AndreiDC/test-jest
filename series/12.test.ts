import series from "./12";

test("series 12 firs trst", () => {
  expect(series([1, 2, 3, 4, 5, 6, 0])).toBe(6);
});
test("series 12 second trst", () => {
  expect(series([1, 2, 0, 0, 0, 0, 0, 0, 0])).toBe(2);
});
