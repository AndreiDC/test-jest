/* From the beginning of the day N seconds have passed (N is integer). 
Find an amount of full minutes passed from the beginning of the last hour.*/

export function lastHaurs(n) {
  let lh, int, aju: number;
  aju = Math.floor(n / 3600);
  int = aju * 3600;
  lh = n - int;
  return Math.floor(lh / 60);
}
