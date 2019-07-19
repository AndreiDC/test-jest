import loop from "./12";

test("while 12 first test", () => {
  expect(loop(18)).toEqual([5, 15]);
});
test("while 12 second  test", () => {
  expect(loop(48)).toEqual([9, 45]);
});
