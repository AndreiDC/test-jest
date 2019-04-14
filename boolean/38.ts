/*  Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in the range 1 to 8),
 verify the following proposition: "A bishop can move from one square to another during one turn". */

export default function aBishop(x1, y1, x2, y2: number) {
  let turn: boolean;
  turn = Math.abs(x1 - x2) == Math.abs(y1 - y2);
  return turn;
}
