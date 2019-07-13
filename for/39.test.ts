import loop from "./39";

test("for 39 first test", () => {
  expect(loop(3, 4)).toEqual([3, 3, 3, 4, 4, 4, 4]);
});
test("for 39 second test", () => {
  expect(loop(4, 6)).toEqual([4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]);
});
