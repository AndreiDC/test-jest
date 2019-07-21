export default function loop(n: number) {
  let f1, f2, c: number;
  f1 = 1;
  f2 = 1;
  while (n >= f2) {
    c = f2;
    f2 = f2 + f1;
    f1 = c;
  }
  return f2;
}
