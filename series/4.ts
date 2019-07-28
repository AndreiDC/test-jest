export default function series(vec = []) {
  let sum: number;
  let prod: number;
  sum = 0;
  prod = 1;
  sum = vec.reduce((acumulator, nexValue) => acumulator + nexValue);
  prod = vec.reduce((acumulator, nexValue) => acumulator * nexValue);
  return [sum, prod];
}
