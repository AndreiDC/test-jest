/*From the beginning of the day N seconds have passed (N is integer).
 Find an amount of full hours passed from the beginning of the day.*/

export function fullHours(n: number) {
  let hours: number;
  hours = Math.floor(n / 3600);
  return hours;
}
