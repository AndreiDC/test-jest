/*An integer is given. If the integer is positive then decrease it by 8,
 otherwise do not change it. Output the obtained integer.*/

export default function isInteger(a: number) {
  let ansver: number;
  if (a > 0) {
    ansver = a - 8;
  } else {
    ansver = a;
  }
  return ansver;
}
