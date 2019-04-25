/*Three points A, B, C on the real axis are given. Determine whether B or C is closer to A.
 Output the nearest point and its distance from A.*/

export default function newValue(a, b, c: number) {
  let min, rez: number;

  if (Math.abs(a - b) > Math.abs(a - c)) {
    min = c;
    rez = c - a;
    return [parseFloat(min.toFixed(2)), parseFloat(rez.toFixed(2))];
  } else {
    min = b;
    rez = b - a;
    return [parseFloat(min.toFixed(2)), Math.abs(parseFloat(rez.toFixed(2)))];
  }
}
