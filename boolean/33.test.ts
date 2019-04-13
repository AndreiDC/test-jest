import existTr from "./33";

test("veryfly if triangle exists first test", () => {
  expect(existTr(7, 28, 25)).toBe(true);
});
test("veryfly if triangle exists second test", () => {
  expect(existTr(8, 14, 28)).toBe(false);
});
