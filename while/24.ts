export default function loop(n: number) {
  let F1, F2, c: number;
  F1 = 1;
  F2 = 1;
  while (n > F2) {
    c = F2;
    F2 = F1 + F2;
    F1 = c;
  }
  return n == F2;
}
