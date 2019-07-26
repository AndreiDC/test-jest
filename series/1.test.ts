import series from "./1";

test("series first test", () => {
  expect(
    series([6.46, -0.78, -5.98, 9.33, 9.17, -6.19, -6.89, 0.58, 9.45, -0.28])
  ).toBe(14.87);
});
