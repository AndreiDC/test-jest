import { largeSmaller } from "./8";

test("Dispaly the large and the smaller number first test ", () => {
  expect(largeSmaller(3.14, 1.25)).toEqual([3.14, 1.25]);
});
test("Dispaly the large and the smaller number second test ", () => {
  expect(largeSmaller(1.2, 0.9)).toEqual([1.2, 0.9]);
});
