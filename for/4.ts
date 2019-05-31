/* Given the price of 1 kg of sweets (as a real number), output the cost of 1, 2, …, 10 kg of these sweets. */

export default function sweets(uneKg: number) {
  let manyKg = [];
  for (let i = 1; i <= 10; i++) {
    manyKg.push(i * uneKg);
  }
  return manyKg;
}
