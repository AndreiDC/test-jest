import { array } from "./13";

test("display all odd elements from array first test", () => {
  expect(array(5, [0.13, 5.97, 6.1, 5.06, 4.85])).toEqual([4.85, 6.1, 0.13]);
});
test("display all odd elements from array second test", () => {
  expect(array(7, [4.63, 1.21, 1.87, 3.35, 0.53, 1.89, 2.53])).toEqual([
    2.53,
    0.53,
    1.87,
    4.63
  ]);
});
