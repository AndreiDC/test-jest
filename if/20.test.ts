import newValue from "./20";

test(" nearest point and its distance from A first test", () => {
  expect(newValue(-6.58, -5.97, 7.71)).toEqual([-5.97, 0.61]);
});
test(" nearest point and its distance from A second test", () => {
  expect(newValue(1.23, 9.49, -8.3)).toEqual([9.49, 8.26]);
});
test(" nearest point and its distance from A third test", () => {
  expect(newValue(-9.11, -4.45, -3.79)).toEqual([-4.45, 4.66]);
});
test(" nearest point and its distance from A 4 test", () => {
  expect(newValue(4.87, -6.92, -8.96)).toEqual([-6.92, 11.79]);
});
