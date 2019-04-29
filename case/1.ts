/* An integer in the range 1 to 7 is given. Output the name of the respective day of week:
 1 — "Monday", 2 — "Tuesday", …, 7 — "Sunday".*/

export default function nameDayWeek(day) {
  let nameDay: string;
  switch (day) {
    case 1:
      nameDay = "Monday";
      break;
    case 2:
      nameDay = "Tuesday";
      break;
    case 3:
      nameDay = "Wednesday";
      break;
    case 4:
      nameDay = "ThursDay";
      break;
    case 5:
      nameDay = "FriDay";
      break;
    case 6:
      nameDay = "Saturday";
      break;
    case 7:
      nameDay = "Sunday";
      break;
    default:
      nameDay = "the day not exist!";
  }
  return nameDay;
}
