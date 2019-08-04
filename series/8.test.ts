import series from "./8";

test("series 8 first test", () => {
  expect(series([-7, 1, -9, 7, 4, -5, 9, -3, 0])).toEqual([[4, 0], 2]);
});
test("series 8 second test", () => {
  expect(series([5, -8, 2])).toEqual([[-8, 2], 2]);
});
