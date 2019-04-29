/* A number of month is given (as an integer in the range 1 to 12): 
1 — January, 2 — February, etc. Output the name of the respective season:
 "Winter", "Spring", "Summer", "Autumn".*/
export function nameSeasonYear(n: number) {
  let nameSeason: string;
  switch (n) {
    case 12:
    case 1:
    case 2:
      nameSeason = "Winted";
      break;
    case 3:
    case 4:
    case 5:
      nameSeason = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      nameSeason = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      nameSeason = "Autumn";
    default:
      nameSeason = "error enter new value";
      break;
  }
  return nameSeason;
}
