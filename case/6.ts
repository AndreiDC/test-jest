import { parse } from "querystring";

/* The units of length are numbered as:
 1 — decimeter,
 2 — kilometer,
 3 — meter,
 4 — millimeter, 
 5 — centimeter. 
   The order number N of a unit of length and also the length L of a segment 
   are given (N is an integer in the range 1 to 5, L is a real number). 
   Output the length of the segment in meters. */
export default function unitsLen(n, l: number) {
  let solution: number;
  switch (n) {
    case 1:
      solution = (1 * l) / 10;
      break;
    case 2:
      solution = (1 * l) / 0.001;
      break;
    case 3:
      solution = l;
      break;
    case 4:
      solution = (1 * l) / 1000;
      break;
    case 5:
      solution = (1 * l) / 100;
      break;
  }
  return parseFloat(solution.toFixed(5));
}
