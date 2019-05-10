/*  Elements of an equilateral triangle are numbered as: 
1 — side a, 
2 — radius R1 of inscribed circle (R1 = a·(3)1/2/6), 
3 — radius R2 of circumscribed circle (R2 = 2·R1), 
4 — area S = a2·(3)1/2/4. 
The order number of one element and its value (as a real number) are given. 
Output values of other elements in the same order. */
export default function equilateral(numbered, value: number) {
  let a, R1, R2, S: number;
  switch (numbered) {
    case 1:
      a = value;
      R1 = (a * Math.sqrt(3)) / 6;
      R2 = 2 * R1;
      S = (Math.pow(a, 2) * Math.sqrt(3)) / 4;
      return [
        parseFloat(R1.toFixed(2)),
        parseFloat(R2.toFixed(2)),
        parseFloat(S.toFixed(2))
      ];
    case 2:
      R1 = value;
      a = (6 * R1) / Math.sqrt(3);
      R2 = 2 * R1;
      S = (Math.pow(a, 2) * Math.sqrt(3)) / 4;
      return [
        parseFloat(a.toFixed(2)),
        parseFloat(R2.toFixed(2)),
        parseFloat(S.toFixed(2))
      ];
    case 3:
      R2 = value;
      R1 = R2 / 2;
      a = (6 * R1) / Math.sqrt(3);
      S = (Math.pow(a, 2) * Math.sqrt(3)) / 4;
      return [
        parseFloat(R1.toFixed(2)),
        parseFloat(a.toFixed(2)),
        parseFloat(S.toFixed(2))
      ];
    case 4:
      S = value;
      a = Math.sqrt((S * 4) / Math.sqrt(3));
      R1 = (a * Math.sqrt(3)) / 6;
      R2 = 2 * R1;
      return [
        parseFloat(a.toFixed(2)),
        parseFloat(R1.toFixed(2)),
        parseFloat(R2.toFixed(2))
      ];
    default:
      return "Error";
  }
}
