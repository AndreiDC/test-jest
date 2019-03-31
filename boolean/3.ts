/*
 Given integer A, verify the following proposition: "The number A is even".
*/

export function isEvent(a: number) {
  let ev: boolean;
  ev = a % 2 == 0;
  return ev;
}
