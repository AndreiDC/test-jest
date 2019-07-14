import loop from "./1";

test("while 1 first test ", () => {
  expect(loop(48.68, 4.82)).toBe(0.48);
});
test("while 1 second test ", () => {
  expect(loop(50.6, 10.37)).toBe(9.12);
});
