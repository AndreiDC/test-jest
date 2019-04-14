import aKing from "./37";

test("A king  during one turn first test", () => {
  expect(aKing(6, 2, 5, 1)).toBe(true);
});
test("A king  during one turn second test", () => {
  expect(aKing(4, 2, 8, 1)).toBe(false);
});
test("A king  during one turn third test", () => {
  expect(aKing(6, 8, 7, 7)).toBe(true);
});
