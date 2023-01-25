//Manager test implements Employee test,Manager is the parent//
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
    it("should set office number through using the constuctor", () => {
      const expectedOfn =95;
      const nem = new Manager("foo", 0, "foo@foo.com", expectedOfn);
      expect(nem.officeNumber).toEqual(expectedOfn);
      });
   
    it("getRole() returns the correct Manager info", () => {
        const expectedRole = "Manager";
        const nem =new Manager("foo",0,"foo@foo.com", 95);
        expect(nem.getRole()).toEqual(expectedRole);
    });
   
    it("can get office number through getOffice()", () => {
      const expectedOfn = 95;
      const nem = new Manager("foo",0,"foo@foo.com",expectedOfn)
      expect(nem.getOfficeNumber()).toEqual(expectedOfn);
    });

    });   