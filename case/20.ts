/*  Given two integers D (day) and M (month) that represent a correct date,
 output the zodiacal name corresponding to this date: 
 "Aquarius" 20.1–18.2, 
 "Pisces" 19.2–20.3, 
 "Aries" 21.3–19.4, 
 "Taurus" 20.4–20.5, 
 "Gemini" 21.5–21.6, 
 "Cancer" 22.6–22.7, 
 "Leo" 23.7–22.8, 
 "Virgo" 23.8–22.9, 
 "Libra" 23.9–22.10, 
 "Scorpio" 23.10–22.11, 
 "Sagittarius" 23.11–21.12, 
 "Capricorn" 22.12–19.1. */

export default function zodiacal(d, m: number) {
  let zodNam: string, nr: number;
  switch (m) {
    case 1:
      if (d < 20) {
        nr = 1;
      } else {
        nr = 2;
      }
      break;
    case 2:
      if (d < 19) {
        nr = 2;
      } else {
        nr = 3;
      }
      break;
    case 3:
      if (d < 21) {
        nr = 3;
      } else {
        nr = 4;
      }
      break;
    case 4:
      if (d < 20) {
        nr = 4;
      } else {
        nr = 5;
      }
      break;
    case 5:
      if (d < 21) {
        nr = 5;
      } else {
        nr = 6;
      }
      break;
    case 6:
      if (d < 22) {
        nr = 6;
      } else {
        nr = 7;
      }
      break;
    case 7:
      if (d < 23) {
        nr = 7;
      } else {
        nr = 8;
      }
      break;
    case 8:
      if (d < 23) {
        nr = 8;
      } else {
        nr = 9;
      }
      break;
    case 9:
      if (d < 23) {
        nr = 9;
      } else {
        nr = 10;
      }
      break;
    case 10:
      if (d < 23) {
        nr = 10;
      } else {
        nr = 11;
      }
      break;
    case 11:
      if (d < 23) {
        nr = 11;
      } else {
        nr = 12;
      }
      break;
    case 12:
      if (d < 22) {
        nr = 12;
      } else {
        nr = 1;
      }
  }
  switch (nr) {
    case 1:
      zodNam = "Aquarius";
      break;
    case 2:
      zodNam = "Pisces";
      break;
    case 3:
      zodNam = "Arias";
      break;
    case 4:
      zodNam = "Taurus";
      break;
    case 5:
      zodNam = "Gemini";
      break;
    case 6:
      zodNam = "Cancer";
      break;
    case 7:
      zodNam = "Leo";
      break;
    case 8:
      zodNam = "Virgo";
      break;
    case 9:
      zodNam = "Libra";
      break;
    case 10:
      zodNam = "Scorpio";
      break;
    case 11:
      zodNam = "Sagittarius";
      break;
    case 12:
      zodNam = "Capricorn";
      break;
  }
  return zodNam;
}
