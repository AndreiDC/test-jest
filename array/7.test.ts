import array from "./7";
test(" return invers order of array first test ", () => {
  expect(array(3, [2, 3, 4, 5])).toEqual([5, 4, 3, 2]);
});
test(" return invers order of array second test ", () => {
  expect(array(2, [1.44, 8.01])).toEqual([8.01, 1.44]);
});
