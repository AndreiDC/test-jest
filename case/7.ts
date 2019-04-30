/* The units of weight are numbered as:
 1 — kilogram,
 2 — milligram, 
 3 — gram, 
 4 — ton, 
 5 — centner (= 100 kilograms). 
 The order number N of a unit of weight and the mass M of a solid are given 
 (N is an integer in the range 1 to 5, M is a real number). Output the mass of the solid in kilograms. */

export default function units(n, m: number) {
  let solution: number;
  switch (n) {
    case 1:
      solution = m;
      break;
    case 2:
      solution = m / 1000000;
      break;
    case 3:
      solution = m / 1000;
      break;
    case 4:
      solution = m * 1000;
      break;
    case 5:
      solution = m * 100;
      break;

    default:
      solution = undefined;
      break;
  }
  return parseFloat(solution.toFixed(8));
}
