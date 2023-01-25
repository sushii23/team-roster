const { constant } = require("lodash");

const makeTeam =team => {

const developManager = manager => {
    `
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
    `
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
    `
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




























};