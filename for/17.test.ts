import loop from "./17";

test("displays the sum of the number A in power ", () => {
  expect(loop(2, 3)).toEqual(15);
});
test("displays the sum of the number A in power next test ", () => {
  expect(loop(9, 3)).toEqual(820);
});
