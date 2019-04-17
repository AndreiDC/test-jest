import theSmaller from "./7";

test("Display smaller number first test", () => {
  expect(theSmaller(5.46, 7.85)).toEqual(5.46);
});

test("Display smaller number second test", () => {
  expect(theSmaller(5.46, 1)).toEqual(1);
});
