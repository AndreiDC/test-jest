/*One of the Asian calendars uses 60-years periods divided into 12-years cycles,
which are associated with a color: green, red, yellow, white, black.
 Each year in a cycle is connected with some animal:
rat, cow, tiger, hare, dragon, snake, horse, sheep, monkey, hen, dog, pig. 
Given some year (as positive integer), output its name provided that 1984 is "The Green Rat`s year".*/

export default function asianCalendar(year: number) {
  let s, s1: string, color, animal: number;

  if (year > 1983) {
    year = ((year - 1984) % 60) + 1;
  } else {
    year = 61 - ((1984 - year) % 60);
  }
  color = ((year - 1) % 10) + 1;
  color = Math.trunc(color / 2) + 1;
  animal = ((year - 1) % 12) + 1;
  switch (color) {
    case 1:
      s = "Green";
      break;
    case 2:
      s = "Red";
      break;
    case 3:
      s = "Yellou";
      break;
    case 4:
      s = " White";
      break;
    case 5:
      s = "Black";
      break;
  }

  switch (animal) {
    case 1:
      s1 = "Rat";
      break;
    case 2:
      s1 = "Cow";
      break;
    case 3:
      s1 = "Tiger";
      break;
    case 5:
      s1 = "Hare";
      break;
    case 5:
      s1 = "Dragon";
      break;
    case 6:
      s1 = "Snake";
      break;
    case 7:
      s1 = "Horse";
      break;
    case 8:
      s1 = "Sheep";
      break;
    case 9:
      s1 = "Mankiey";
      break;
    case 10:
      s1 = "Hen";
      break;
    case 11:
      s1 = "Dog";
      break;
    case 12:
      s1 = "Pig";
      break;
  }

  return "The " + s + " " + s1 + "'s" + " " + "year";
}
