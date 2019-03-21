/*A two-digit integer is given. Output an integer obtained from the given one by exchange of its digits.*/
export function exchange(n) {
  let one, ten, exch: number;
  one = n % 10;
  ten = Math.floor(n / 10);
  exch = one * 10 + ten;
  return exch;
}
