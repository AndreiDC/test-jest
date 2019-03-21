/*From the beginning of the day N seconds have passed (N is integer).
 Find an amount of full minutes passed from the beginning of the day.*/

export function fullMinutes(n: number) {
  let menutes;
  menutes = Math.floor(n / 60);
  return menutes;
}
