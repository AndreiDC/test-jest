export default function series(vec = [], k: number) {
  let ansver: boolean;
  ansver = false;
  for (let i = 1; i <= vec.length; i++) {
    if (vec[i] < k) {
      return (ansver = true);
    }
  }
  return ansver;
}
