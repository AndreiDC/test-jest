/*Given coordinates x1, y1, x2, y2 of two chessboard squares (as integers in the range 1 to 8), 
verify the following proposition:
 "A rook can move from one square to another during one turn".*/

export default function aRook(x1, y1, x2, y2: number) {
  let turn: boolean;
  turn = x1 == x2 || y1 == y2;
  return turn;
}
