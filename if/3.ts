/*An integer is given. If the integer is positive then decrease it by 8,
 if the integer is negative then increase it by 6, if the integer equals 0 then change it to 10.
  Output the obtained integer. */

export default function anInteger(a: number) {
  let ansver: number;
  if (a > 0) {
    ansver = a - 8;
  } else {
    if (a < 0) {
      ansver = a + 6;
    } else {
      ansver = 10;
    }
  }
  return ansver;
}
