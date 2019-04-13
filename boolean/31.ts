/* Given three integers a, b, c that are the sides of a triangle,
 verify the following proposition: "The triangle with sides a, b, c is isosceles".*/

export default function isIsoscel(a, b, c: number) {
  let isoscel: boolean;
  isoscel = a == b || b == c || c == a;
  return isoscel;
}
