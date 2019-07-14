export default function loop(n: number) {
  let result: boolean;
  while (3 <= n) {
    n = n / 3;
  }
  if (n == 1) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// export default function loop(n: number) {
//   let result: boolean;
//   while (n % 3 == 0) {
//     n = n / 3;
//   }
//   return n;
// }
