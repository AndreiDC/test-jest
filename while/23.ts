// export default function loop(a, b: number) {
//   let r: number;
//   while (b != 0) {
//     r = a % b;
//     a = b;
//     b = r;
//   }
//   return a;
// }
export default function loop(a, b: number) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
