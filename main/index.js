const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/page-template.js");

let teamMembers = [];
let idArray = [];



async function createManager() {
  console.log("Please build your team 👥");
  const { managerName, managerId, managerEmail, managerOfficeNumber } = await inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Enter the team managers name.",
      validate: (answer) => (answer !== "") || "Please enter at least one character.",
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter the team manager's id.",
      validate: (answer) => (answer.match(/^[0-9]\d*$/) && true) || "Enter a positive number.",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter the team manager's email.",
      validate: (answer) => (answer.match(/\S+@\S+\.\S+/) && true) || "Enter a valid email address.",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Enter the team manager's office number",
      validate: (answer) => (answer.match(/^[1-9]\d*$/) && true) || "Enter a positive number greater than zero.",
    },
  ]);
  teamMembers.push(new Manager(managerName, managerId, managerEmail, managerOfficeNumber));
  idArray.push(managerId);
  await createTeam();
}

async function createTeam() {
  const { memberChoice } = await inquirer.prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "Pick the type of team member you would like to add.",
      choices: ["Engineer", "Intern", "I don't want to add any more team members."],
    },
  ]);
  switch (memberChoice) {
    case "Engineer":
      await developEngineer();
      break;
    case "Intern":
      await developIntern();
      break;
    default:
      buildTeam();
  }
}

async function developEngineer() {
  const { engineerName, engineerId, engineerEmail, engineerGithub } = await inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Enter the name of the engineer.",
      validate: (answer) => (answer !== "") || "Please enter at least one character.",
    },
    {
      type: "input",
      name: "engineerId",
      message: "Enter the engineer's id.",
      validate: async (answer) => {
        const pass = answer.match(/^[0-9]\d*$/);
        if (pass) {
          if (idArray.includes(answer)) {
            return "Please enter a different number.";
          } else {
            return true;
          }
        }
        return " Enter a positive number.";
      },
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Enter the engineer's email.",
      validate: (answer) => (answer.match(/\S+@\S+\.\S+/) && true) || "Enter a valid email address.",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Enter the engineer's GitHub username.",
      validate: (answer) => (answer !== "") || "Please enter at least one character.",
    },
  ]);
  teamMembers.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGithub));
  idArray.push(engineerId);
  await createTeam();
}

async function developIntern() {
  const { internName, internId, internEmail, internSchool} = await inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Enter the name of the intern.",
      validate: (answer) => (answer !== "") || "Please enter at least one character.",
    },
    {
      type: "input",
      name: "internId",
      message: "Enter the intern's id.",
      validate: async (answer) => {
        const pass = answer.match(/^[0-9]\d*$/);
        if (pass) {
          if (idArray.includes(answer)) {
            return "Please enter a different number.";
          } else {
            return true;
          }
        }
        return " Enter a positive number.";
      },
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter the intern's email.",
      validate: (answer) => (answer.match(/\S+@\S+\.\S+/) && true) || "Enter a valid email address.",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Enter the intern's school.",
      validate: (answer) => (answer !== "") || "Please enter at least one character.",
    },
  ]);
  teamMembers.push(new Intern(internName, internId, internEmail, internSchool));
  idArray.push(internId);
  await createTeam();
}

async function buildTeam() {
  fs.writeFileSync(distPath, render(teamMembers), "utf-8");
}

createManager();

