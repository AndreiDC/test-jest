import series from "./22";

test("series 21 first test", () => {
  let vec = [],
    a: number;
  for (let i = 9; i <= 9; i++) {
    a = Math.floor(Math.random() * 10);
    vec.push(a);
  }
  expect(series(vec)).toBe(0);
});
