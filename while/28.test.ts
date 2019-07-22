import loop from "./28";

test("while 28 first test ", () => {
  expect(loop(0.076403)).toEqual([2.4, 4, 2.416667]);
});
test("while 28 second test ", () => {
  expect(loop(0.005598)).toEqual([2.416667, 5, 2.413793]);
});
