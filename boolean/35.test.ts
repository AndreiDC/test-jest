import sameColor from "./35";

test("chessboard squares have the same color first test", () => {
  expect(sameColor(7, 2, 8, 6)).toBe(false);
});
test("chessboard squares have the same color first test", () => {
  expect(sameColor(4, 8, 1, 7)).toBe(true);
});
