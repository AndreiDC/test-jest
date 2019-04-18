/*Given three real numbers, output the minimal value and then the maximal value.*/

export function miniMaxi(a, b, c: number) {
  let min, max: number;
  max = a;
  min = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  if (min > b) {
    min = b;
  }
  if (min > c) {
    min = c;
  }
  return [min, max];
}
