export default function series(vec = [], k: number) {
  let poz = 0;
  let newvec = [];
  for (let i = 1; i <= vec.length; i++) {
    if (vec[i] > k) {
      newvec.push(i);
    }
  }
  poz = newvec[1];
  if (poz > 0) {
    return poz;
  } else {
    return 0;
  }
}
