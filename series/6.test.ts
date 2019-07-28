import series from "./6";

test("series 6 first test product fractional part of all numbers", () => {
  expect(series([1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6])).toEqual(0.00072);
});
