import outputStr from "./2";

test("display the message according to the number  ", () => {
  expect(outputStr(1)).toBe("bad");
});
test("display the message according to the number first test  ", () => {
  expect(outputStr(2)).toBe("unsatisfactory");
});
test("display the message according to the number second test  ", () => {
  expect(outputStr(3)).toBe("mediocre");
});
test("error mesage", () => {
  expect(outputStr(-8)).toBe("error");
});
