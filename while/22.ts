export default function isPrim(n: number) {
  let prim, d: number;
  prim = 1;
  d = 2;
  while (d <= n / 2) {
    if (n % d == 0) prim = 0;
    d = d + 1;
  }
  if (prim == 1) {
    return true;
  } else {
    return false;
  }
}
