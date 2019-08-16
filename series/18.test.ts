import series from "./18";

test("Series 18 first test", () => {
  expect(series([1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9], 13)).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]);
});
test("Series 18 second test", () => {
  expect(series([3, 4, 4, 5, 8, 9, 11, 12, 14, 16, 17, 17], 12)).toEqual([
    3,
    4,
    5,
    8,
    9,
    11,
    12,
    14,
    16,
    17
  ]);
});
