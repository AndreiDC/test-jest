export default function loop(a, b: number) {
  while (a >= b) {
    a = a - b;
  }
  return parseFloat(a.toFixed(2));
}
