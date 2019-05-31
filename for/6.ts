/* Given the price of 1 kg of sweets (as a real number), output the cost of 1.2, 1.4, …, 2 kg of these sweets. */

export default function sweets(uneKg: number) {
  let manyKg = [],
    pr: number;
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      pr = (uneKg / 10) * i;
      manyKg.push(parseFloat((uneKg + pr).toFixed(2)));
    }
  }
  return manyKg;
}
