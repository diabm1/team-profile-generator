const Employee = require("../lib/Employee");
const employee = new Employee("michael", "234556", "mjamison1@gmail.com");

test("should receive constructor values", () => {
  expect(employee.name).toBe("michael");
  expect(employee.id).toBe("234556");
  expect(employee.email).toBe("mjamison1@gmail.com");
});

test("should receive name from getName() method", () => {
  expect(employee.getName()).toBe("michael");
});

test("should receive id from getId() method", () => {
  expect(employee.getId()).toBe("234556");
});

test("should receive email from getEmail() method", () => {
  expect(employee.getEmail()).toBe("mjamison1@gmail.com");
});

test("should receive role from getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
