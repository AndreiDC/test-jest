/* X kg of sweet cost A euro. Find the cost of 1 kg and Y kg of the sweets (positive numbers X, A, Y are given).*/
export function cost1kg(x, a, y: number) {
  let c: number;
  c = (y * a) / x;
  return c; //parseFloat(c.toFixed(2));
}
export function costYkg(x, a: number) {
  let cY: number;
  cY = a / x;
  return parseFloat(cY.toFixed(2));
}
