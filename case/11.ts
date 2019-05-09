/*A locator can be focused on the directions "N" (north), "W" (west), "S" (south), "E" (east)
 and perform three digital instructions: 1 — "turn left", −1 — "turn right", 2 — "turn on 180°"). 
 A symbol C (an initial direction of the locator) and two integers N1 and N2 (instructions) are given.
  Output the direction of the locator (as symbol) after performing the instructions.*/
export default function newDirection(C: string, N1, N2: number) {
  let rf, rf1: string, nm, nm1: number;
  switch (N1) {
    case 1:
      switch (C) {
        case "n":
        case "N":
          rf = "W";
          break;
        case "w":
        case "W":
          rf = "S";
          break;
        case "s":
        case "S":
          rf = "E";
          break;
        case "e":
        case "E":
          rf = "N";
          break;
        default:
          rf = "keep trying";
          break;
      }
      break;
    case -1:
      switch (C) {
        case "n":
        case "N":
          rf = "E";
          break;
        case "e":
        case "E":
          rf = "S";
          break;
        case "s":
        case "S":
          rf = "W";
          break;
        case "w":
        case "W":
          rf = "N";
          break;
        default:
          rf = "keep trying";
          break;
      }
      break;
    case 2:
      switch (C) {
        case "n":
        case "N":
          rf = "S";
          break;
        case "s":
        case "S":
          rf = "N";
          break;
        case "w":
        case "W":
          rf = "E";
          break;
        case "e":
        case "E":
          rf = "W";
          break;

        default:
          rf = "keep trying";
          break;
      }
      break;
    default:
      rf = "keep trying";
  }
  switch (N2) {
    case 1:
      switch (rf) {
        case "n":
        case "N":
          rf1 = "W";
          break;
        case "w":
        case "W":
          rf1 = "S";
          break;
        case "s":
        case "S":
          rf1 = "E";
          break;
        case "e":
        case "E":
          rf1 = "N";
          break;
        default:
          rf1 = "keep trying";
          break;
      }
      break;

    case -1:
      switch (rf) {
        case "n":
        case "N":
          rf1 = "E";
          break;
        case "e":
        case "E":
          rf1 = "S";
          break;
        case "s":
        case "S":
          rf1 = "W";
          break;
        case "w":
        case "W":
          rf1 = "N";
          break;
        default:
          rf1 = "keep trying";
          break;
      }
      break;
    case 2:
      switch (rf) {
        case "n":
        case "N":
          rf1 = "S";
          break;
        case "s":
        case "S":
          rf1 = "N";
          break;
        case "w":
        case "W":
          rf1 = "E";
          break;
        case "e":
        case "E":
          rf1 = "W";
          break;

        default:
          rf1 = "keep trying";
          break;
      }
      break;
    default:
      rf1 = "keep trying";
  }

  return rf1;
}
