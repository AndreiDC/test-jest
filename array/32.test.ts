import array32 from "./32";
test("Array 32. I test find the order number of its first local minimum ", () => {
  expect(array32(8, [7.02, 6.89, 6.76, 6.65, 7.34, 8.63, 5.16, 5.8])).toBe(4);
});

test("Array 32. II test find the order number of its first local minimum ", () => {
  expect(array32(7, [7.35, 7.21, 7.08, 6.98, 7.19, 2.67, 5.02])).toBe(4);
});
test("Array 32. III test find the order number of its first local minimum ", () => {
  expect(array32(5, [6.63, 6.88, 0.24, 7.06, 7.15])).toBe(1);
});
