/* . A robot can move in four directions ("N" — north, "W" — west, "S" — south, "E" — east)
 and perform three digital instructions: 0 — "move in the former direction",
  1 — "turn left", −1 — "turn right". A symbol C (an initial direction of the robot) and 
  an integer N (an instruction) are given. Output the direction of the robot (as symbol) after
   performing the instruction. */
export default function moveRobot(c: string, n: number) {
  let rf: string;

  switch (n) {
    case 1:
      switch (c) {
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
      }
      break;
    case -1:
      switch (c) {
        case "n":
        case "N":
          rf = "E";
          break;
        case "w":
        case "W":
          rf = "N";
          break;
        case "s":
        case "S":
          rf = "W";
          break;
        case "e":
        case "E":
          rf = "S";
          break;
      }

      break;
    case 0:
      switch (c) {
        case "n":
        case "N":
          rf = "N";
          break;
        case "w":
        case "W":
          rf = "W";
          break;
        case "s":
        case "S":
          rf = "S";
          break;
        case "e":
        case "E":
          rf = "E";
          break;
      }
  }
  return rf;
}
