import ifWhite from "./34";

test("verify if chessboard square is white first test", () => {
  expect(ifWhite(1, 1)).toBe(false);
});
test("verify if chessboard square is white second test", () => {
  expect(ifWhite(1, 2)).toBe(true);
});
test("verify if chessboard square is white third test", () => {
  expect(ifWhite(6, 6)).toBe(false);
});
test("verify if chessboard square is white third test", () => {
  expect(ifWhite(1, 8)).toBe(true);
});
