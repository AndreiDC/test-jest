import arr33 from "./33";
test("first test find last maximum local", () => {
  expect(arr33(6, [8.51, 3, 3.9, 3.58, 3.35, 3.09])).toBe(3);
});
test(" second test find last maximum local", () => {
  expect(arr33(5, [7.39, 4.41, 4.63, 4.33, 4.16])).toBe(3);
});

test(" three test find last maximum local", () => {
  expect(arr33(7, [9.07, 0.12, 6.34, 4.22, 6.17, 2.67, 3.72])).toBe(7);
});
test(" forteen test find last maximum local", () => {
  expect(arr33(9, [3.54, 3.25, 3.13, 2.84, 2.6, 2.26, 2.07, 1.91, 1.55])).toBe(
    1
  );
});
