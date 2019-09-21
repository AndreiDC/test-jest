import { array } from "./12";

test("return all elements from array that add position", () => {
  expect(array(4, [7.45, 7.99, 9.76, 3.51])).toEqual([7.99, 3.51]);
});
test("return all elements from array that add position", () => {
  expect(array(2, [5.85, 6.43])).toEqual([6.43]);
});
