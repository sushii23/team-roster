const Intern = require("../lib/Intern");

const makeTeam = (team) => {
  const developManager = (manager) => {
    return `
<div class="card employd">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i></i>${manager.getRole()}</h3>
    </div>
    <div class="em-content">
        <ul class="list-info">
            <li class="info">ID: ${manager.getId()}</li>
            <li class="info">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="info">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
`;
  };

  const developEngineer = (engineer) => {
    return `
    <div class="card employd">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i></i>${
              engineer.role
            }</h3>
        </div>
        <div class="em-content">
            <ul class="list-info">
                <li class="info">ID: ${engineer.getId()}</li>
                <li class="info">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="info">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `;
  };

  const developIntern = (intern) => {
    return `
    <div class="card employd">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i></i>${intern.getRole()}</h3>
        </div>
        <div class="em-content">
            <ul class="list-info">
                <li class="info">ID: ${intern.getId()}</li>
                <li class="info">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="info">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
  };

  const html = [];

  for (let i = 0; i < team.length; i++) {
    let employee = team[i];
    switch (employee.getRole()) {
      case "Manager":
        html.push(developManager(employee));
        break;
      case "Engineer":
        html.push(developEngineer(employee));
        break;
      case "Intern":
        html.push(developIntern(employee));
        break;
    }
  }
  return html.join("");
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team</title>
    <link rel="stylesheet" href="style.css">
   
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="team-head">
                <h1 class="text-center">Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-section d-flex justify-content-center">
                ${makeTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
