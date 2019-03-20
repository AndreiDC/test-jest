/*. Solve a quadratic equation A·x^2 + B·x + C = 0 with given coefficients A, B, C
 (A and the discriminant of the equation are positive). Output the smaller equation root and then the larger one.
  Roots of the quadratic equation may be found by formula x1, 2 = (−B ± (D)1/2)/(2·A),
where D = B^2 − 4·A·C is a discriminant.*/

export function solQuadequ(a, b, c: number) {
  let det, sol, sol1: number;
  det = Math.pow(b, 2) - 4 * (a * c);
  if (det < 0) {
    return (sol = 0);
  } else if (det == 0) {
    return (sol = (-b / 2) * a);
  } else if (det > 0) {
    sol = (-b - Math.sqrt(det)) / (2 * a);
    sol1 = (-b + Math.sqrt(det)) / (2 * a);
    return [sol, sol1];
  }
}
