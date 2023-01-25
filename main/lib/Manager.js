const Employee = require("./Employee");

const Manager = class extends Employee {
    constructor(name, id, email, officeNumber) {
     super(name, id, email);
     this.officeNumber = officeNumber;
    }

    getRole = () => "Manager";
    getOfficeNumber = () => this.officeNumber;
}

module.exports = Manager;