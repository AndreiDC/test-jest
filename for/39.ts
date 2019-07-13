export default function loop(a, b: number) {
  let res = [];

  for (let i = a; i <= b; i++) {
    for (let j = 1; j <= i; j++) {
      res.push(i);
    }
  }
  return res;
}
