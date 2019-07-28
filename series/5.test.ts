import series from "./5";
test("series 5 first test sum  of all integer parts", () => {
  expect(series([1.2, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9])).toEqual(45);
});
test("series 5 first test sum  of all integer parts", () => {
  expect(series([1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9])).toEqual(9);
});
