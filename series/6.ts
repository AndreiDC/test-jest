export default function series(vec = []) {
  let prod: number;
  prod = 1;
  prod = vec.reduce(
    (acumulator, nexVal) => acumulator * (nexVal - Math.trunc(nexVal))
  );
  return parseFloat(prod.toFixed(5));
}
