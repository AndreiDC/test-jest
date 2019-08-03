export default function series(vec = []) {
  let sum: number;

  sum = vec.reduce((acumulator, nexVal) => acumulator + Math.round(nexVal), 0);
  return sum;
}
