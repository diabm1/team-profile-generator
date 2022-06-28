const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "James";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
  const id = 1;
  const e = new Employee("James", id);
  expect(e.id).toBe(id);
});

test("Can set email via constructor arguments", () => {
  const email = "d@e.f";
  const e = new Employee("James", 1, email);
  expect(e.email).toBe(email);
});

test("Can get name via getName()", () => {
  const testValue = "James";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("James", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "g@h.j";
  const e = new Employee("James", 100, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("James", 100, "g@h.j");
  expect(e.getRole()).toBe(testValue);
})