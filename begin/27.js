/*Given a number A, compute a power A8 using three multiplying operators for computing A2, A4, A8 sequentially.
 Output all obtained powers of the number A.*/
function powA2(a) {
  let p;
  p = Math.pow(a, 2);
  return p;
}

function powA4(a) {
  let p;
  p = Math.pow(a, 4);
  return parseFloat(p.toFixed(2));
}
function powA8(a) {
  let p;
  p = Math.pow(a, 8);
  return parseFloat(p.toFixed(2));
}

module.exports = [{ powA2 }, { powA4 }, { powA8 }];
