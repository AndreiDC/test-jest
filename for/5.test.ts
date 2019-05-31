import sweets from "./5";

test("display price range 0.1,1 kg  sweets", () => {
  expect(sweets(46)).toEqual([
    4.6,
    9.2,
    13.8,
    18.4,
    23.0,
    27.6,
    32.2,
    36.8,
    41.4,
    46.0
  ]);
});
test("display price range 0.1,1 kg  sweets first test", () => {
  expect(sweets(93.7)).toEqual([
    9.37,
    18.74,
    28.11,
    37.48,
    46.85,
    56.22,
    65.59,
    74.96,
    84.33,
    93.7
  ]);
});
