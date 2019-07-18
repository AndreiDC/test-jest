import loop from "./9";

test("while 9 first test", () => {
  expect(loop(3)).toBe(2);
});

test("while 9 second test", () => {
  expect(loop(327)).toBe(6);
});
