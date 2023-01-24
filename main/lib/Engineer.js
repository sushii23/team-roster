const Employee = require("./Employee");

const Engineer = class extends Employee {
    constructor(name, id, email, github) {
     super(name, id, email);
     this.github = github;
    }

    getRole = () => "Engineer";
    getGithub = () => this.github;
}

module.exports = Engineer;