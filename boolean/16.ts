import { booleanLiteral } from "@babel/types";

/*Given a positive integer, verify the following proposition: "The integer is a two-digit even number".*/

export function twoDigit(a: number) {
  let twon: boolean;
  twon = a % 2 == 0 && 9 < a && a < 99;
  return twon;
}
