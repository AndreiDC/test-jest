export default function series(vec = []) {
  let newVec = [],
    k: number;
  vec.map(e => {
    if (e % 2 == 0) {
      newVec.push(e);
    }
  });

  return [newVec, newVec.length];
}
