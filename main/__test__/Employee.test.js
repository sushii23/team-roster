const Employee = require("../lib/Employee");

test("If an Employee can be created", () => {
 const ne = new Employee();
 expect( ne instanceof Employee).toBe(true);
});

test("If the name can be created using constructor class", () => {
 const expectedName = "Loree";
 const ne = new Employee(expectedName);
 expect(ne.name).toBe(expectedName);
});

test("If the id can be set through constuctor", () => {
  const expectedID = 436036;
  const ne = new Employee("foo",expectedID);
  expect(ne.id).toBe(expectedID);
});

test("if the email can be set through constructor", () => {
  const expectedEA = "foo@foo.com";
  const ne = new Employee("foo",0,expectedEA);
  expect(ne.email).toBe(expectedEA);
});

test("If you're able to get name from the method getName()", () => {
    const expectedName = "Loree";
    const ne = new Employee(expectedName);
    expect(ne.getName()).toBe(expectedName);
});

test("If you're able to get Id from the method getId()", () => {
    const expectedID = 436036;
    const ne = new Employee("foo",expectedID);
    expect(ne.getId()).toBe(expectedID);
});

test("If you're able to get email from the method getEmail()", () => {
    const expectedEA = "foo@foo.com";
    const ne = new Employee("foo",0,expectedEA);
    expect(ne.getEmail()).toBe(expectedEA);
});