import arr23 from "./23";
test("calculates the mean up to K and then L", () => {
  expect(
    arr23([2.05, 1.93, 7.73, 8.6, 4.36, 3.97, 8.02, 9.29, 7.99], 9, 4, 6)
  ).toEqual(6.17);
});
