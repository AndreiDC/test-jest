import { arr26 } from "./26";

test("1 test array 26 paritatea array", () => {
  expect(arr26(5, [6, 7, 4, 5, -10])).toEqual(0);
});

test("2 test array 26 paritatea array", () => {
  expect(arr26(6, [-6, -5, -4, -3, 4, -5])).toEqual(0);
});

test("3 test array 26 paritatea array", () => {
  expect(arr26(10, [-7, 3, 4, -5, 5, -4, -7, 3, -7, -6])).toEqual(2);
});

test("4 test array 26 paritatea array", () => {
  expect(arr26(9, [2, -4, 4, -3, 4, -2, -6, 1, -5])).toEqual(2);
});
