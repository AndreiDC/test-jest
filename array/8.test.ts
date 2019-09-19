import array from "./8";
test("exclude all odd elements first test", () => {
  expect(array(7, [6, 5, 2, 3, 4, 2, 7])).toEqual([3, [5, 3, 7]]);
});
test("exclude all odd elements second test", () => {
  expect(array(6, [4, 6, 2, 4, 10, 5])).toEqual([1, [5]]);
});
