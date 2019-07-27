export default function series(a = []) {
  let aver: number;
  aver = a.reduce((total, score) => total + score) / a.length;
  return aver;
}
