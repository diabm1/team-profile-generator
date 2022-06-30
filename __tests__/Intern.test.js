import Intern from "../lib/Intern";

test("Can set intern via constructor", () => {
  const testValue = "OSU";
  const e = new Intern("Tom", 1, "a@b.c", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Tom", 1, "a@b.c", "OSU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "OSU";
  const e = new Intern("Tom", 1, "a@b.c", testValue);
  expect(e.getSchool()).toBe(testValue);
});
