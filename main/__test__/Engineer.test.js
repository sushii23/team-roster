const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should get a GitHub account through using the constuctor", () => {
      const expectedGh ="sush123";
      const nen = new Engineer("foo", 0, "foo@foo.com", "sush123");
      expect(nen.gitHub).toEqual(expectedGh);
      });
   
    it("getRole() returns the correct engineer info", () => {
        const expectedRole = "Engineer";
        const nen =new Engineer("foo",0,"foo@foo.com", "sush123");
        expect(nen.getRole()).toEqual(expectedRole);
    });
   
    it("can find Github name through getGithub()", () => {
      const expectedGh = "sush123";
      const nen = new Engineer("foo",0,"foo@foo.com",expectedGh)
      expect(nen.getGithub()).toEqual(expectedGh);
    });

    });   