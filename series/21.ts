export default function series(vec = []) {
  let ans: boolean, k: number;
  ans = false;
  k = 0;
  for (let i = 0; i <= vec.length; i++) {
    if (vec[i] < vec[i + 1]) {
      k = k + 1;
    }
  }
  if (k == vec.length - 1) {
    ans = true;
  } else {
    ans = false;
  }
  return ans;
}
