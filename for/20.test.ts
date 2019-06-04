import loop from "./20";

test("return the sum of fact  ", () => {
  expect(loop(3)).toBe(9);
});

test("return the sum of fact next test ", () => {
  expect(loop(5)).toBe(153);
});
