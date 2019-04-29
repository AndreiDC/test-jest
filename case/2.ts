/*Given an integer K, output the respective examination mark: 1 — "bad", 2 — "unsatisfactory",
 3 — "mediocre", 4 — "good", 5 — "excellent". If K is not in the range 1 to 5 then output string "error". */

export default function outputStr(k: number) {
  let mesage: string;
  switch (k) {
    case 1:
      mesage = "bad";
      break;
    case 2:
      mesage = "unsatisfactory";
      break;
    case 3:
      mesage = "mediocre";
      break;
    case 4:
      mesage = "good";
      break;
    case 5:
      mesage = "excellent";
      break;
    default:
      mesage = "error";
  }
  return mesage;
}
