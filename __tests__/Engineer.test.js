import Engineer from "../lib/Engineer";

//checking added github property in inherited class
test("Can setup a github account via constructor", () => {
  const testValue = "davidgithub";
  const e = new Engineer("David", 1, "a@b.c", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("David", 1, "a@b.c", "davidgithub");
  expect(e.getRole()).toBe(testValue);
});

test("Can get a github username via getGithub()", () => {
  const testValue = "davidgithub";
  const e = new Engineer("David", 1, "a@b.c", testValue);
  expect(e.getGithub()).toBe(testValue);
});
