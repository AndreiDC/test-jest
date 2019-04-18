/*Given three real numbers, output the minimal value of them. */

export default function minimalValue(a, b, c: number) {
  let minimal: number;
  minimal = a;
  if (minimal > b) {
    minimal = b;
  }
  if (minimal > c) {
    minimal = c;
  }
  return minimal;
}
