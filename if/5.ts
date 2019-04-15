/* Three integers are given. Find the amount of positive and amount of negative integers in 
the input data. */
export function amount(a, b, c: number) {
  let kp, kn: number;
  kp = 0;
  kn = 0;
  if (a == 0 && b == 0 && c == 0) {
    return [0, 0];
  } else {
    if (a > 0) {
      kp = kp + 1;
    } else {
      kn = kn + 1;
    }

    if (b > 0) {
      kp = kp + 1;
    } else {
      kn = kn + 1;
    }

    if (c > 0) {
      kp = kp + 1;
    } else {
      kn = kn + 1;
    }
  }

  return [kp, kn];
}
