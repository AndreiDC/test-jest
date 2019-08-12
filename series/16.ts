export default function series(vec = [], k: number) {
  let newvec = [],
    kk: number;
  kk = 0;

  for (let i = 0; i < vec.length; i++) {
    if (vec[i] > k) {
      kk = kk + 1;
    }
  }
  if (kk > 0) {
    for (let i = 0; i <= vec.length; i++) {
      if (vec[i] > k) {
        newvec.push(i);
      }
    }
  } else {
    return 0;
  }

  return newvec[newvec.length - 1] + 1;
}
