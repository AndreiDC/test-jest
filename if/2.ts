/* An integer is given. If the integer is positive then decrease it by 8,
 otherwise increase it by 6. Output the obtained integer. */

export default function isPositive(a: number) {
  let ansver: number;
  if (a > 0) {
    ansver = a - 8;
  } else {
    ansver = a + 6;
  }
  return ansver;
}
