/*. Two positive integers A and B are given (A > B). 
Segment of length A contains the greatest possible amount of inside segments of length B (without overlaps). 
Find the amount of segments B placed on the segment A.
 Use the operator of integer division.*/

export function segLen(a, b: number) {
  let sl: number;
  sl = Math.floor(a / b);
  return sl;
}
