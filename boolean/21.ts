/* Given a three-digit integer, verify the following proposition: "All digits of the number are in ascending order"."*/

export function nemAsc(n: number) {
  let na: boolean, a, b, c: number;
  a = Math.floor(n / 100);
  b = Math.floor(n / 10) % 10;
  c = n % 10;
  na = b > a && b < c;
  return na;
}
