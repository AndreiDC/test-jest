/* A three-digit integer is given. Using one operator of integer division find first digit of
 the given integer (a hundreds digit).*/
export function finFirGit(n: number) {
  let first: number;
  first = Math.floor(n / 100);
  return first;
}
