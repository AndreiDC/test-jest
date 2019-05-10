/*Given an age in years (as an integer in the range 20 to 69),
 output its alphabetic equivalent as: "twenty years", "thirty-two years", "forty-one years", etc.  */

export default function alphabetic(Y: number) {
  let d, u: number, decimal, units: string;
  d = Math.trunc(Y / 10) * 10;
  u = Y % 10;
  switch (d) {
    case 20:
      decimal = "twenty";
      break;
    case 30:
      decimal = "thirty";
      break;
    case 40:
      decimal = "fourty";
      break;
    case 50:
      decimal = "fifty";
      break;
    case 60:
      decimal = "sixty";
      break;
    default:
      decimal = "Error! value not in range";
      break;
  }
  switch (u) {
    case 1:
      units = "one";
      break;
    case 2:
      units = "two";
      break;
    case 3:
      units = "three";
      break;
    case 4:
      units = "four";
      break;
    case 5:
      units = "five";
      break;
    case 6:
      units = "six";
      break;
    case 7:
      units = "seven";
      break;
    case 8:
      units = "eight";
      break;
    case 9:
      units = "nine";
      break;

    default:
      units = "Error! do not entered correctly value";
      break;
  }
  return decimal + "-" + units + " " + "years";
}
