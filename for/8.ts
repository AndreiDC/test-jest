/* Given two integers A and B (A < B), find the product of all integers in the range A to B inclusive.*/
export default function productrange(a, b) {
  let product: number;
  product = 1;
  for (let i = a; i <= b; i++) {
    product = product * i;
  }
  return product;
}
