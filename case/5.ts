/* The arithmetic operations are numbered as:
 1 — addition, 
 2 — subtraction,
 3 — multiplication, 
 4 — division.
  The order number N of an operation and two real numbers
  A and B are given (N is an integer in the range 1 to 4, В is not equal to 0).
  Perform the operation with the operands A and B and output the result. */

export default function aritOper(a, b, n: number) {
  let solution: number, er: String;
  switch (n) {
    case 1:
      solution = a + b;
      break;
    case 2:
      solution = a - b;
      break;
    case 3:
      solution = a * b;
      break;
    case 4:
      solution = a / b;
      break;
    default:
      er = "error enter new value";
      break;
  }
  return solution || er;
}
