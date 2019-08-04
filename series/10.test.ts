import series from "./10";

test("series 10 first test", () => {
  expect(series([-1, -2, -3])).toEqual(false);
});

test("series 10 second test", () => {
  expect(series([-1, 2, 3])).toEqual(true);
});
