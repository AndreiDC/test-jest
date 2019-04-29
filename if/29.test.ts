import desStr from "./29";

test(" description text first test ", () => {
  expect(desStr(60)).toBe("positive even number");
});
test(" description text second test ", () => {
  expect(desStr(0)).toBe("zero number");
});
test(" description text first test ", () => {
  expect(desStr(-60)).toBe("negative even number");
});
