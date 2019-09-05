import array from "./3";

test("array 3 first test", () => {
  expect(array(3, -0.51, 0.91)).toEqual([-0.51, 0.4, 1.31]);
});
test("array 3 second test", () => {
  expect(array(5, -3.65, -3.94)).toEqual([
    -3.65,
    -7.59,
    -11.53,
    -15.47,
    -19.41
  ]);
});
