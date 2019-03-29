/*Given a year (as a positive integer), find the respective number of the century.
 Note that, for example, 20th century began with the year 1901.*/

export function namberIncentury(n) {
  let cen: number;
  cen = Math.floor((n - 1) / 100 + 1);
  return cen;
}
