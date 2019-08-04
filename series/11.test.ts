import series from "./11";

test("series 11 firs test find all number less then k", () => {
  expect(series([1, 2, 3, 4, 5, 6], 5)).toEqual(true);
});

test("series 11 second test find all number less then k", () => {
  expect(series([6, 7, 8, 9, 10, 11], 5)).toEqual(false);
});
