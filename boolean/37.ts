/*Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in the range 1 to 8),
 verify the following proposition: "A king can move from one square to another during one turn".*/

export default function aKing(x1, y1, x2, y2: number) {
  let turn: boolean;
  turn =
    (x1 + 1 == x2 && y1 + 1 == y2) ||
    (x1 - 1 == x2 && y1 - 1 == y2) ||
    (x1 - 1 == x2 && y1 + 1 == y2) ||
    (x1 + 1 == x2 && y1 - 1 == y2);
  return turn;
}
