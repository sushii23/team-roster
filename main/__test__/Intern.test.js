const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should get a school through using the constuctor", () => {
      const expectedSc ="OU";
      const nei = new Intern("foo", 0, "foo@foo.com", expectedSc);
      expect(nei.github).toEqual(expectedSc);
      });
   
    it("getRole() returns the correct Intern info", () => {
        const expectedRole = "Intern";
        const nei =new Intern("foo",0,"foo@foo.com", "OU");
        expect(nei.getRole()).toEqual(expectedRole);
    });
   
    it("can find school name through getSchool()", () => {
      const expectedSc = "OU";
      const nei = new Intern("foo",0,"foo@foo.com",expectedSc)
      expect(nei.getGithub()).toEqual(expectedSc);
    });

    });   