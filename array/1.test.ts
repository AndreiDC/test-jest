import array from "./1";

test("array 1 first test", () => {
  expect(array(7)).toEqual([1, 3, 5, 7, 9, 11, 13]);
});

test("array 1 first test", () => {
  expect(array(4)).toEqual([1, 3, 5, 7]);
});
