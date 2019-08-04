export default function series(vec = []) {
  let newVec = [];
  vec.map(e => {
    if (e % 2 == 1) {
      newVec.push(e);
    }
  });
  return [newVec, newVec.length];
}
