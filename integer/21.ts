/* From the beginning of the day N seconds have passed (N is integer). 
Find an amount of seconds passed from the beginning of the last minute.*/

export function lasMinute(n: number) {
  let lm: number;
  lm = n % 60;
  return lm;
}
