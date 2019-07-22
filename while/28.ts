export default function loop(ep: number) {
  let A1, A2, K: number;
  A1 = 0;
  A2 = 2;
  K = 1;
  while (Math.abs(A2 - A1) >= ep) {
    A1 = parseFloat(A2.toFixed(6));
    A2 = parseFloat((2 + 1 / A1).toFixed(6));
    K = K + 1;
  }

  return [A1, K, A2];
}
