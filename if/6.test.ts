import largeValue from "./6";

test(" Display the large value first test ", () => {
  expect(largeValue(3, 4)).toEqual(4);
});
test(" Display the large value second test ", () => {
  expect(largeValue(0, 0)).toEqual("enter number bigger like the 0");
});
test(" Display the large value third test ", () => {
  expect(largeValue(1, 10)).toEqual(10);
});
