//Manager test implements Employee test,Manager is the parent//
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Intern", () => {
    it("should set office number through using the constuctor", () => {
      const expectedOfn ="95";
      const nem = new Manager("foo", 0, "foo@foo.com", expectedOfn);
      expect(nem.officeNumber).toEqual(expectedOfn);
      });
   
    it("getRole() returns the correct Manager info", () => {
        const expectedRole = "Manager";
        const nem =new Manager("foo",0,"foo@foo.com", "");
        expect(nem.getRole()).toEqual(expectedRole);
    });
   
    it("can find school name through getoffice()", () => {
      const expectedOfn = "95";
      const nem = new Manager("foo",0,"foo@foo.com",expectedOfn)
      expect(nem.getOfficeNumber()).toEqual(expectedOfn);
    });

    });   