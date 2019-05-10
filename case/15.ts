/* The suits of playing cards are numbered as: 
1 — spades, 
2 — clubs, 
3 — diamonds, 
4 — hearts. Card values 
"Jack", "Queen", "King", "Ace" are numbered as 
  11,      12,     13,     14 respectively. 
A card value N (as an integer in the range  6 to 14) and a suit
M (as an integer in the range 1 to 4) are given. Output the card description as: 
"six of diamonds", "queen of spades", etc.  */

export default function playCard(N, M: number) {
  let rf, rf1: string;
  switch (M) {
    case 1:
      rf = "spades";
      break;
    case 2:
      rf = "clubs";
      break;
    case 3:
      rf = "diamonds";
      break;
    case 4:
      rf = "hearts";
      break;
    default:
      rf = " Error! not exist the suit ";
  }
  switch (N) {
    case 6:
      rf1 = "six";
      break;
    case 7:
      rf1 = "seven";
      break;
    case 8:
      rf1 = "eight";
      break;
    case 9:
      rf1 = "nine";
      break;
    case 10:
      rf1 = "ten";
      break;
    case 11:
      rf1 = "jock";
      break;
    case 12:
      rf1 = "queen";
      break;
    case 13:
      rf1 = "king";
      break;
    case 14:
      rf1 = "ace";
      break;
    default:
      rf1 = "Error! not exist paly card value";
      break;
  }
  return rf1 + " " + "of" + " " + rf;
}
