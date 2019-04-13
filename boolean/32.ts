/* Given three integers a, b, c that are the sides of a triangle, verify the following proposition: 
"The triangle with sides a, b, c is a right triangle".*/

export default function isRightTriangle(a, b, c: number) {
  let rigTri: boolean;
  rigTri =
    a * a + b * b == c * c || b * b + c * c == a * a || a * a + c * c == b * b;
  return rigTri;
}
