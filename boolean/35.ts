/* Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in the range 1 to 8),
  verify the following proposition: "Both of the given chessboard squares have the same color".*/
export default function sameColor(x1, y1, x2, y2: number) {
  let saCo: boolean;
  saCo =
    ((x1 + y1) % 2 == 0 && (x2 + y2) % 2 == 0) ||
    ((x1 + y1) % 2 == 1 && (x2 + y2) % 2 == 1);
  return saCo;
}
