const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, intern) {
    super(name, id, email);
    this.intern = intern;
  }

  getIntern() {
    return this.intern;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
