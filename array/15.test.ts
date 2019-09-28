import array from "./15";

test(" array 15 first test ", () => {
  expect(array(4, [6.69, 0.96, 7.44, 4.4])).toEqual([6.69, 7.44, 4.4, 0.96]);
});
test(" array 15 second test ", () => {
  expect(array(7, [0.38, 2.72, 7.33, 0.58, 7.09, 2.51, 1.18])).toEqual([
    0.38,
    7.33,
    7.09,
    1.18,
    2.51,
    0.58,
    2.72
  ]);
});
