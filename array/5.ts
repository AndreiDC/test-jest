export default function array(n: number) {
  let fibArray = [],
    fibRes: number;
  fibArray[0] = 1;
  fibArray[1] = 1;
  for (let i = 2; i <= n - 1; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}
