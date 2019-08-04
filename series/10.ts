export default function series(vec = []) {
  let ansver: boolean;
  ansver = false;
  for (let i = 1; i <= vec.length; i++) {
    if (vec[i] > 0) {
      return (ansver = true);
    }
  }
  return ansver;
}
