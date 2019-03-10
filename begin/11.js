function sum(a, b) {
    let s = (Math.abs(a) + Math.abs(b));
    let pointNum = parseFloat(s.toFixed(2));
   return pointNum;
  }
  
  function diff(a, b) {
    let d = Math.abs(a) - Math.abs(b);
    let pointNum = parseFloat(d.toFixed(2));
    return pointNum;
  }
  
  function pro(a, b) {
    let p = Math.abs(a) * Math.abs(b);
    let pointNum = parseFloat(p.toFixed(2));
    return pointNum;
  }
  
  function div(a, b) {
    let d = Math.abs(a) / Math.abs(b);
    let pointNum = parseFloat(d.toFixed(2));
   return pointNum;
  }
  
  module.exports = { sum, diff, pro, div };
  