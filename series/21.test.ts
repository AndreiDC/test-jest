import series from "./21";

test("series 21 first test ", () => {
  expect(series([6.84, 7.8])).toEqual(true);
});

test("series 21 second test", () => {
  expect(series([-7.49, -3.96, -2.03, -1.08, -8.18])).toEqual(false);
});

test("series 21 third test", () => {
  expect(series([2.53, -5.35, 9.01])).toBe(false);
});

test("series 21 Fourth", () => {
  expect(series([-2.99, 4.06, 8.53])).toBe(true);
});
