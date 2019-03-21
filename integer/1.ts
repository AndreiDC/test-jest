import { NumericLiteral } from "@babel/types";

/* A distance L is given in centimeters. Find the amount of full meters of this distance (1 m = 1000 cm). 
Use the operator of integer division.*/

export function fulMeter(lc: number) {
  let lm: number;
  lm = Math.floor(lc / 100);
  return lm;
}
