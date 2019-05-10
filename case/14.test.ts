import equilateral from "./14";

test("Elements of an equilateral triangle ", () => {
  expect(equilateral(2, 6.06)).toEqual([20.99, 12.12, 190.82]);
});
test("Elements of an equilateral triangle Fourth test ", () => {
  expect(equilateral(4, 67.93)).toEqual([12.53, 3.62, 7.23]);
});
