export default function series(a = []) {
  let prod: number;
  prod = a.reduce((b, c) => {
    return b * c;
  });
  return prod;
}

// let prod: number;
// prod = 1.975;
// for (let i = 1; i <= a.length; i++) {
//   prod = prod * a[i];
// }
// return prod;
