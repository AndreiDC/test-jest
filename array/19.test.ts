import array from "./19";
test("return last element a1< ak < a10 first test ", () => {
  expect(array([28, 52, 50, 37, 77, 68, 56, 98, 52, 40])).toBe(4);
});
test("return last element a1< ak < a10 second test", () => {
  expect(array([42, 90, 66, 91, 97, 43, 85, 22, 93, 83])).toBe(6);
});
