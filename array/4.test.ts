import array from "./4";

test("array 4 first test", () => {
  expect(array(4, -0.47, 2.26)).toEqual([-0.47, -1.06, -2.4, -5.43]);
});

test("array 4 second test", () => {
  expect(array(6, 1.24, -1.26)).toEqual([
    1.24,
    -1.56,
    1.97,
    -2.48,
    3.13,
    -3.94
  ]);
});
