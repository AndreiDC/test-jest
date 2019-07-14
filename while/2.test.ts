import loop from "./2";

test("while 2 first test", () => {
  expect(loop(44.77, 17.15)).toBe(2);
});
test("while 2 second test", () => {
  expect(loop(70.34, 12.03)).toBe(5);
});
