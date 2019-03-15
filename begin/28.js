/* Given a number A, compute a power A15 using five multiplying operators for computing A2, A3, A5, A10, A15 sequentially. 
Output all obtained powers of the number A.  */

function powA2(a) {
  let p;
  p = Math.pow(a, 2);
  return parseFloat(p.toFixed(2));
}
function powA3(a) {
  let p;
  p = Math.pow(a, 3);
  return parseFloat(p.toFixed(2));
}
function powA5(a) {
  let p;
  p = Math.pow(a, 5);
  return parseFloat(p.toFixed(2));
}
function powA10(a) {
  let p;
  p = Math.pow(a, 10);
  return parseFloat(p.toFixed(2));
}
function powA15(a) {
  let p;
  p = Math.pow(a, 15);
  return parseFloat(p.toFixed(2));
}
module.exports = [{ powA2 }, { powA3 }, { powA5 }, { powA10 }, { powA15 }];
