const Employee = require("../lib/Employee");

test("Can an Employee be created", () => {
const ne = new Employee();
expect( ne instanceof Employee).toBe(true);
});

