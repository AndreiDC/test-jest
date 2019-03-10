function sum(a, b) {
  let s = Math.pow(a,2) + Math.pow(b,2);
  let pointNum = parseFloat(s.toFixed(2));
 return pointNum;
}

function diff(a, b) {
  let d = Math.pow(a,2) - Math.pow(b,2);
  let pointNum = parseFloat(d.toFixed(2));
  return pointNum;
}

function pro(a, b) {
  let p = Math.pow(a,2) * Math.pow(b,2);
  let pointNum = parseFloat(p.toFixed(2));
  return pointNum;
}

function div(a, b) {
  let d = Math.pow(a,2) / Math.pow(b,2);
  let pointNum = parseFloat(d.toFixed(2));
 return pointNum;
}

module.exports = { sum, diff, pro, div };
