/* A centigrade temperature T is given. Convert it into a Fahrenheit temperature.
 The centigrade temperature TC and the Fahrenheit temperature TF are connected as:
TC = (TF − 32)·5/9.*/

export function tC(tF: number) {
  let t: number;
  t = tF - (32 * 5) / 9;
  return parseFloat(t.toFixed(2));
}
