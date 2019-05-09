/*  Elements of a right isosceles triangle are numbered as: 
1 — leg a, 
2 — hypotenuse c = a·(2)1/2, 
3 — altitude h drawn onto hypotenuse (h = c/2), 
4 — area S = c·h/2. 
The order number of one element and its value (as a real number) are given. 
Output values of other elements in the same order. */

export default function triangle(numbered, value: number) {
  let a, c, h, s: number;
  a = 0;
  c = 0;
  h = 0;
  s = 0;
  switch (numbered) {
    case 1:
      a = value;
      c = a * Math.sqrt(2);
      h = c / 2;
      s = c * (h / 2);
      return [
        parseFloat(c.toFixed(2)),
        parseFloat(h.toFixed(2)),
        parseFloat(s.toFixed(2))
      ];
    case 2:
      a = value / Math.sqrt(2);
      c = value;
      h = c / 2;
      s = c * (h / 2);
      return [
        parseFloat(a.toFixed(2)),
        parseFloat(h.toFixed(2)),
        parseFloat(s.toFixed(2))
      ];
    case 3:
      h = value;
      c = 2 * h;
      a = c / Math.sqrt(2);
      s = c * (h / 2);
      return [
        parseFloat(a.toFixed(2)),
        parseFloat(c.toFixed(2)),
        parseFloat(s.toFixed(2))
      ];
    case 4:
      s = value;
      h = Math.sqrt(s);
      c = 2 * h;
      a = c / Math.sqrt(2);
      return [
        parseFloat(a.toFixed(2)),
        parseFloat(c.toFixed(2)),
        parseFloat(h.toFixed(2))
      ];
    default:
      return "Error";
  }
}
