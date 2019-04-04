'Given three integers A, B, C, verify the following proposition: "Exactly two of the numbers A, B, C are positive".';

export function exactlyTwo(a, b, c) {
  let exa: boolean;
  exa = (a > 0 && b > 0) || (b > 0 && c > 0) || (c > 0 && a > 0);
  return exa;
}
