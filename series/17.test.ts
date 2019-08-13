import series from "./17";

test("series 17 first test", () => {
  expect(series([1.59, 1.86, 2.69, 6.15, 8.06], 0.57)).toEqual([
    0.57,
    1.59,
    1.86,
    2.69,
    6.15,
    8.06
  ]);
});

test("series 17 second test", () => {
  expect(series([3.36, 5.46], 9.54)).toEqual([3.36, 5.46, 9.54]);
});

test("series 17 third test", () => {
  expect(series([6.96, 8.99], 9.49)).toEqual([6.96, 8.99, 9.49]);
});
