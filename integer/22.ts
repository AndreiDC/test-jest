/*From the beginning of the day N seconds have passed (N is integer).
 Find an amount of seconds passed from the beginning of the last hour.*/
export function lastHour(n: number) {
  let lh: number;
  lh = n % 3600;
  return lh;
}
