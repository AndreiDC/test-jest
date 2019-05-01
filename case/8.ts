/*Given two integers D (day) and M (month) representing a correct date of a non-leap year, 
output values D and M for the previous date. */
export default function previousData(d, m: number) {
  let nd, nm: number;
  if (d == 1) {
    m = m - 1;
    switch (m) {
      case 1:
        nd = 31;
        nm = 1;
        break;
      case 2:
        nd = 28;
        nm = 2;
        break;
      case 3:
        nd = 31;
        nm = 3;
        break;
      case 4:
        nd = 30;
        nm = 4;
        break;
      case 5:
        nd = 31;
        nm = 5;
        break;
      case 6:
        nd = 30;
        nm = 5;
        break;
      case 7:
        nd = 31;
        nm = 7;
        break;
      case 8:
        nd = 31;
        nm = 8;
        break;
      case 9:
        nd = 30;
        nm = 9;
        break;
      case 10:
        nd = 31;
        nm = 10;
        break;
      case 11:
        nd = 30;
        nm = 11;
        break;
      case 12:
        nd = 31;
        nm = 12;
        break;
      default:
        nd = undefined;
        nm = NaN;
        break;
    }
  } else {
    nd = d - 1;
  }
  return [nd, nm || m];
}
