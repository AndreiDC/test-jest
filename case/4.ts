/*A number of month is given (as an integer in the range 1 to 12):
 1 — January, 2 — February, etc. Output the amount of days in the month for a non-leap year. */

export default function numberDayMonth(month: number) {
  let numberDay: number, error: string;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numberDay = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      numberDay = 30;
      break;
    case 2:
      numberDay = 28;
      break;
    default:
      error = "error enter new value";
      break;
  }
  return numberDay || error;
}
