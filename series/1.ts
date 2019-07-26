/* Given the real number, find their sum */

export default function series(a = []) {
  let sum: number;
  sum = a.reduce((b, c) => {
    return b + c;
  });
  return parseFloat(sum.toFixed(5));
}
