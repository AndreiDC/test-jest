import { array } from "./20";

test(" array 20 first test ", () => {
  expect(
    array([1.93, 5.92, 9.63, 5.4, 5.54, 2.94, 5.2, 5.9, 1.61, 1.86], 7, 8)
  ).toEqual(11.1);
});
test(" array 20 first test ", () => {
  expect(array([1.0, 6.57, 2.35, 8.38, 6.5, 8.72, 0.97], 4, 6)).toEqual(23.6);
});
