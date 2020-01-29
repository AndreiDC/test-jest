import arr29 from "./29";

test("find the maximum among elements with odd order number first test", () => {
  expect(arr29(4, [-2.23, 4.51, 8.28, -0.05])).toBe(8.28);
});

test("find the maxinum among elements with odd order number second test ", () => {
  expect(arr29(8, [0.62, 5.73, 8.46, -3.38, -0.53, -3.7, -0.12, -7.66])).toBe(
    8.46
  );
});
