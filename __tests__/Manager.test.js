const Manager = require("../lib/Manager");
const manager = new Manager("tim", "234557", "timandy35@gmail.com", "3021");

test("should receive constructor values", () => {
  expect(manager.name).toBe("tim");
  expect(manager.id).toBe("234557");
  expect(manager.email).toBe("timandy35@gmail.com");
  expect(manager.officeNumber).toBe("3021");
});

test("should receive name from getName() method", () => {
    expect(manager.getName()).toBe("tim");
  });
  
  test("should receive id from getId() method", () => {
    expect(manager.getId()).toBe("234557");
  });
  
  test("should receive email from getEmail() method", () => {
    expect(manager.getEmail()).toBe("timandy35@gmail.com");
  });
  test("should receive office number from getOfficeNumber() method", () => {
    expect(manager.getOfficeNumber()).toBe("3021");
  });
  
  test("should receive role from getRole() method", () => {
    expect(manager.getRole()).toBe("Manager");
  });
