import series from "./20";

test("series 20 first test", () => {
  expect(series([6, 7, 6, 3, 3, 2, 7, 4, 1], 9)).toEqual([[6, 2], 2]);
});
