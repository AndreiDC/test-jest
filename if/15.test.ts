import sumLargeValue from "./15";

test("return suma two larges numbers first test", () => {
  expect(sumLargeValue(-3.86, 1.82, 5.27)).toBe(7.09);
});
test("return suma two larges numbers second test", () => {
  expect(sumLargeValue(5.51, 1.68, -6.71)).toBe(7.19);
});
