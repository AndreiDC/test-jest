import series from "./4";
test("series 4 first test sum and product", () => {
  expect(series([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([45, 362880]);
});
