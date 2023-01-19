const Employee = require("../lib/Employee");

test("If an Employee can be created", () => {
 const ne = new Employee();
 expect( ne instanceof Employee).toBe(true);
});

test("If the name can be created using constructor class", () => {
 const expectedName = "Loree";
 const ne = new Employee(expectedName);
 expect(ne.name).toEqual(expectedName);
});

test("If the id can be set through constuctor", () => {
  const expectedID = 436036;
  const ne = new Employee("foo",expectedID);
  expect(ne.id).toEqual(expectedID);
});

test("if the email can be set through constructor", () => {
  const expectedEA = "foo@foo.com";
  const ne = new Employee("foo",0,expectedEA);
  expect(ne.email).toEqual(expectedEA);
});
//get method sections//
test("If you're able to get name from the method getName()", () => {
    const expectedName = "Loree";
    const ne = new Employee(expectedName);
    expect(ne.getName()).toEqual(expectedName);
});

test("If you're able to get Id from the method getId()", () => {
    const expectedID = 436036;
    const ne = new Employee("foo",expectedID);
    expect(ne.getId()).toEqual(expectedID);
});

test("If you're able to get email from the method getEmail()", () => {
    const expectedEA = "foo@foo.com";
    const ne = new Employee("foo",0,expectedEA);
    expect(ne.getEmail()).toEqual(expectedEA);
});

test("If getRole() returns the correct employee info", () => {
    const expectedRole = "Employee";
    const ne =new Employee("Loree",0,"foo@foo.com");
    expect(ne.getRole()).toEqual(expectedRole);
});