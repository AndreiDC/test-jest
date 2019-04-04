/*Given a four-digit integer, verify the following proposition: "The number is read equally both from left to right and from right to left".*/

export function polin(n: number) {
  let a, b, c, d: number, pol: boolean;
  a = Math.floor(n / 1000);
  b = Math.floor(n / 100) % 10;
  c = Math.floor(n / 10) % 10;
  d = n % 10;
  pol = b + c == a + d;
  return pol;
}
