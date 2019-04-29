/* Given an integer, output its description string as: 
"negative even number", 
"zero number",
"positive odd number", etc.*/

export default function desStr(n: number) {
  let s1n = "negative even number",
    s1p = "positive even number",
    s2n = "negative odd number",
    s2p = "positive odd number",
    s3 = "zero number";
  if (n == 0) {
    return s3;
  } else {
    if (n > 0) {
      if (n % 2 == 0) {
        return s1p;
      } else {
        return s2p;
      }
    } else {
      if (n % 2 == 1) {
        return s2n;
      } else {
        return s1n;
      }
    }
  }
}
