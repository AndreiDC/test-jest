/*Days of week are numbered as: 1 — Monday, 2 — Tuesday, …, 6 — Saturday, 7 — Sunday.
 An integer K in the range 1 to 365 and an integer N in the range 1 to 7 are given. 
 Find the number of day of week for K-th day of year provided 
 that in this year January 1 was N-th day of week.*/

export function findDay(k, n: number) {
  let fd: number;
  fd = ((k + n + 5) % 7) + 1;
  return fd;
}
