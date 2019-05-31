/*Given the price of 1 kg of sweets (as a real number), output the cost of 0.1, 0.2, …, 1 kg of these sweets.*/

export default function sweets(uneKg: number) {
  let manyKg = [],
    price: number;
  price = uneKg / 10;
  for (let i = 1; i <= 10; i++) {
    manyKg.push(parseFloat((price * i).toFixed(2)));
  }
  return manyKg;
}
