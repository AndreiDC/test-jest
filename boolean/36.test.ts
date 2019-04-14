import aRook from "./36";

test("A rook during one turn first test", () => {
  expect(aRook(7, 5, 7, 8)).toBe(true);
});
test("A rook during one turn second test", () => {
  expect(aRook(1, 5, 3, 2)).toBe(false);
});
test("A rook during one turn third test", () => {
  expect(aRook(4, 3, 7, 7)).toBe(false);
});
