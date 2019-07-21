import loop from "./23";

test("while 23 first test", () => {
  expect(loop(126, 130)).toBe(2);
});
test("while 23 second test", () => {
  expect(loop(2508, 2652)).toBe(12);
});
test("while 23 third test", () => {
  expect(loop(480, 800)).toBe(160);
});
