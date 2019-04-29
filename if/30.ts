/* An integer in the range 1 to 999 is given. 
Output its description string as: "two-digit even number", "three-digit odd number", etc. */

export default function desString(n: number) {
  let s1oo = "one-digit odd number",
    s1oe = "one-digit even number",
    s2to = "two-digit odd number",
    s2te = "two-digit even number",
    s3tho = "three-digit odd number",
    s3the = "three-digit even number";
  if (0 <= n && n <= 9) {
    if (n % 2 == 0) {
      return s1oe;
    } else {
      return s1oo;
    }
  }
  if (10 <= n && n <= 99) {
    if (n % 2 == 0) {
      return s2te;
    } else {
      return s2to;
    }
  }
  if (100 <= n && n <= 999) {
    if (n % 2 == 0) {
      return s3the;
    } else {
      return s3tho;
    }
  }
}
