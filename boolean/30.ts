/* Given three integers a, b, c that are the sides of a triangle,
 verify the following proposition: "The triangle with sides a, b, c is equilateral". */

export default function trianEquilateral(a, b, c: number) {
  let equi: boolean;
  equi = a == b && b == a && c == a;
  return equi;
}
