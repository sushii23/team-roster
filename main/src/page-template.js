const { constant } = require("lodash");

const makeTeam =team => {

const developManager = manager => {
    return`
<div class="card em-card">
    <div class="card-header">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
    </div>
    <div class="card-content">
        <ul class="list-group">
            <li class="list-group-obj">ID: ${manager.id}</li>
            <li class="list-group-obj">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-obj">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>
`;
};


const developEngineer = engineer => {
    return`
    <div class="card em-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.role}</h3>
        </div>
        <div class="card-content">
            <ul class="list-group">
                <li class="list-group-obj">ID: ${manager.id}</li>
                <li class="list-group-obj">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-obj">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `;
};

const developIntern = intern => {
    return`
    <div class="card em-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.role}</h3>
        </div>
        <div class="card-content">
            <ul class="list-group">
                <li class="list-group-obj">ID: ${manager.id}</li>
                <li class="list-group-obj">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-obj">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;  
};

const html = [];

for (let i = 0; i < team.length; i++) {
    let employee = team[i];
    switch(employee.getRole()) {
        case "Manager":
            html.push(generateManager(employee));
            break;
        case "Engineer":
            html.push(generateEngineer(employee));
            break;
        case "Intern":
            html.push(generateIntern(employee));
            break;
  
    }
}
return html.join("");
};

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-head">
                <h1 class="text-center">Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-section col-12 d-flex justify-content-center">
                ${makeTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};



























