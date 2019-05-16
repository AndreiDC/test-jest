/*Given an order number of some training task (as an integer in the range 10 to 40), 
output its alphabetic equivalent as: 
"the eighteenth task", "the twenty-third task", "the thirtieth task", etc   */

export function order(numberTask: number) {
  let alphabeticEquivalent: string, decimals, units: number;
  decimals = Math.trunc(numberTask / 10);
  switch (decimals) {
    case 2:
      alphabeticEquivalent = "twenty";
      break;
    case 3:
      alphabeticEquivalent = "thirty";
      break;
    case 4:
      alphabeticEquivalent = "torty";
      break;
  }
  units = numberTask % 10;
  switch (units) {
    case 1:
      alphabeticEquivalent = alphabeticEquivalent + "-" + "first";
      break;
    case 2:
      alphabeticEquivalent = alphabeticEquivalent + "-" + "second";
      break;
    case 3:
      alphabeticEquivalent = alphabeticEquivalent + "-" + "three";
      break;
    case 4:
      alphabeticEquivalent = alphabeticEquivalent + "-" + "four";
      break;
    case 5:
      alphabeticEquivalent = alphabeticEquivalent + "-" + "five";
      break;
    case 6:
      alphabeticEquivalent = alphabeticEquivalent + "-" + "six";
      break;
    case 7:
      alphabeticEquivalent = alphabeticEquivalent + "-" + "seven";
      break;
    case 8:
      alphabeticEquivalent = alphabeticEquivalent + "-" + "eight";
      break;
    case 9:
      alphabeticEquivalent = alphabeticEquivalent + "-" + "nine";
      break;
    default:
      switch (decimals) {
        case 2:
          alphabeticEquivalent = "twenty";
          break;
        case 3:
          alphabeticEquivalent = "thirty";
          break;
        case 4:
          alphabeticEquivalent = "torty";
          break;
      }
  }

  switch (numberTask) {
    case 10:
      alphabeticEquivalent = "ten";
      break;
    case 11:
      alphabeticEquivalent = "eleven";
      break;
    case 12:
      alphabeticEquivalent = "twelve";
      break;
    case 13:
      alphabeticEquivalent = "thirteen";
      break;
    case 14:
      alphabeticEquivalent = "tourteen";
      break;
    case 15:
      alphabeticEquivalent = "fifteen";
      break;
    case 16:
      alphabeticEquivalent = "sixteen";
      break;
    case 17:
      alphabeticEquivalent = "seventeen";
      break;
    case 18:
      alphabeticEquivalent = "eighteen";
      break;
    case 19:
      alphabeticEquivalent = "nineteen";
      break;
    default:
  }

  return "the" + " " + alphabeticEquivalent + " " + "task";
}
