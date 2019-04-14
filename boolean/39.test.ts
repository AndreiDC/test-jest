import aQueen from "./39";

test("A queen during one turn first test", () => {
  expect(aQueen(3, 4, 3, 6)).toBe(true);
  expect(aQueen(6, 8, 7, 7)).toBe(true);
  expect(aQueen(3, 4, 3, 3)).toBe(true);
});
