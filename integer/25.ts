/*  Days of week are numbered as: 1 — Monday, 2 — Tuesday, …, 6 — Saturday, 7 — Sunday. 
An integer K in the range 1 to 365 is given. Find the number of day of week for K-th day of
 year provided that in this year January 1 was Tuesday. */

export function tuesday(n: number) {
  let td: number;
  td = (n + 3) % 7;
  return td;
}
