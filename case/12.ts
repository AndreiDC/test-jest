/*Elements of a circle are numbered as:
1 — radius R,
2 — diameter D = 2·R,
3 — length L = 2·π·R of the circumference, 
4 — area S = π·R2.
The order number of one element and its value (as a real number) are given.
 Output values of other elements in the same order. Use 3.14 for a value of π.  */

export default function circleValue(numbered, value: number) {
  let R, D, L, S: number;
  R = 0;
  D = 0;
  L = 0;
  S = 0;
  switch (numbered) {
    case 1:
      R = value;
      D = 2 * R;
      L = 2 * Math.PI * R;
      S = Math.PI * Math.pow(R, 2);
      return [
        parseFloat(D.toFixed(2)),
        parseFloat(L.toFixed(2)),
        parseFloat(S.toFixed(2))
      ];
    case 2:
      R = value / 2;
      D = value;
      L = 2 * Math.PI * R;
      S = Math.PI * Math.pow(R, 2);
      return [
        parseFloat(R.toFixed(2)),
        parseFloat(L.toFixed(2)),
        parseFloat(S.toFixed(2))
      ];
    case 3:
      R = (value / 2) * Math.PI;
      D = 2 * R;
      L = value;
      S = Math.PI * Math.pow(R, 2);
      return [
        parseFloat(R.toFixed(2)),
        parseFloat(D.toFixed(2)),
        parseFloat(S.toFixed(2))
      ];
    case 4:
      R = Math.sqrt(value / Math.PI);
      D = 2 * R;
      L = 2 * Math.PI * R;
      S = value;
      return [
        parseFloat(R.toFixed(2)),
        parseFloat(D.toFixed(2)),
        parseFloat(L.toFixed(2))
      ];

    default:
      return "Error";
  }
}
