export default function series(vec = []) {
  let sum = 0,
    newVec = [];
  for (let i = 1; i < vec.length; i++) {
    if (vec[i] % 2 == 0 && vec[i] > 0) {
      newVec.push(vec[i]);
    }
  }
  sum = newVec.reduce((acumul, nexVal) => acumul + nexVal, 0);
  return sum;
}
