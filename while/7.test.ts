import loop from "./7";

test("while 7 first test", () => {
  expect(loop(5)).toBe(3);
});
test("while 7 second test", () => {
  expect(loop(31)).toBe(6);
});
