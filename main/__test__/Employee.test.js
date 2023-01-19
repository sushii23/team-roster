const Employee = require("../lib/Employee");

test("If an Employee can be created", () => {
 const ne = new Employee();
 expect( ne instanceof Employee).toBe(true);
});

test("If the name can be created using constructor class", () => {
 const expectedName = "Loree";
 const ne = new Employee(expectedName);
 expect(ne.expectedName).toBe(expectedName);
});

