import arr28 from "./28";
test("array 26 find the minimum among elements with even order numbers", () => {
  expect(arr28(7, [4.96, -0.31, -9.22, 3.44, 8.55, 3.97, 0.69])).toBe(-0.31);
});
test("array 26 second the minimum among elements with even order numbers", () => {
  expect(
    arr28(9, [-7.85, 9.64, 4.14, 4.11, 9.63, -7.79, -2.63, -1.67, 9.59])
  ).toBe(-7.79);
});
