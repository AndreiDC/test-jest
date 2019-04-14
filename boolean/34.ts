/* Given coordinates x, y of a chessboard square (as integers in the range 1 to 8),
 verify the following proposition: "The chessboard square (x, y) is white".
  Note that the left bottom square (1, 1) is black.*/

export default function ifWhite(x, y: number) {
  let whit: boolean;
  // whit = (y % 2 == 1 && x % 2 == 0) || (y % 2 == 2 && x % 2 == 1);
  whit = (x + y) % 2 == 1;
  return whit;
}
