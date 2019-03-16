import { parse } from "url";

/*. X kg of chocolates cost A euro and Y kg of sugar candies cost B euro (positive numbers X, A, Y, B are given).
 Find the cost of 1 kg of the chocolates and the cost of 1 kg of the sugar candies.
 Also determine how many times the chocolates are more expensive than the sugar candies.*/

var cc, cs: number;
export function costKgChoc(x, a: number) {
  cc = a / x;
  return parseFloat(cc.toFixed(2));
}
export function costKgsug(y, b: number) {
  cs = b / y;
  return parseFloat(cs.toFixed(2));
}
export function diferens(a, b: number) {
  let d: number;
  d = cc / cs;
  return parseFloat(d.toFixed(2));
}
