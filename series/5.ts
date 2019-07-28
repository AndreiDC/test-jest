export default function series(vec = []) {
  let sum: number;
  sum = 0;
  sum = vec.reduce(
    (acumulator, nextVal) => Math.trunc(acumulator) + Math.trunc(nextVal)
  );
  return sum;
}
