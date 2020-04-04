const fs = require("fs");
const inquirer = require("inquirer");
let employee = require("./lib/employee");
let manager = require("./lib/manager");
let engineer = require("./lib/engineer");
let intern = require("./lib/intern");
let isAddingEmployees = true;
let currentEmployee;
let dynamicContent = "";
let htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Summary</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            width: 100%;
            font-family: 'Courier New', Courier, monospace;
            background: rgb(233, 233, 233);
            color: rgb(58, 58, 58);
        }
        #title {
            text-align: left;
            font-size: 3rem;
            padding: 3rem;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        #employee-card-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 2rem;
            padding: 2rem;
        }
        .employee-card {
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        }
        .employee-card-title {
            padding: 2rem;
            font-weight: 100;
            background: rgb(179, 179, 179);
        }
        .employee-card-name{
            font-weight: 800;
        }
        .employee-card-info {
            padding: 2rem;
        }
    </style>
</head>
<body>
    <h1 id="title">Meet The Team</h1>
    <div id="employee-card-container">
        $$$$$
    </div>

    <script>
    </script>
</body>
</html>`;
let prompt = [
    {
        type: "input",
        name: "name",
        message: "Name:",
    },
    {
        type: "input",
        name: "id",
        message: "Employee ID:"
    }, {
        type: "input",
        name: "email",
        message: "Email:"
    }, {
        type: "list",
        name: "title",
        message: "Job Title:",
        choices: ["manager", "engineer", "intern"]

    }, {
        type: "input",
        name: "officeNumber",
        message: "Office Number:",
        when: answers => answers.title == "manager"
    }, {
        type: "input",
        name: "school",
        message: "School:",
        when: answers => answers.title == "intern"
    }, {
        type: "input",
        name: "github",
        message: "Github Username:",
        when: answers => answers.title == "engineer"
    }, 
    {
        type: "confirm",
        name: "moreEmployees",
        message: "add another employee?",
        when: isAddingEmployees
    }
];
var promptUser = inquirer.createPromptModule();
getInput();

function getInput() {
    promptUser(prompt).then(answers=>{
        // instantiates objects based on job title
        if (answers.title == "manager") {
            currentEmployee = new manager(answers.name, answers.id, answers.email, answers.title, answers.officeNumber);
        } else if (answers.title == "engineer") {
            currentEmployee = new engineer(answers.name, answers.id, answers.email, answers.title, answers.github);
        } else if (answers.title == "intern") {
            currentEmployee = new intern(answers.name, answers.id, answers.email, answers.title, answers.school);
        }
        // generates html for employee info
        generateCard(currentEmployee);
        // appends employee info html to the page 

        if (answers.moreEmployees) {
            console.log("==========");
            getInput();
        } else {
            let htmlFile = htmlTemplate.replace("$$$$$", dynamicContent);
            fs.writeFile(__dirname+"/html/index2.html", htmlFile, (err) => {
                if (err) throw err;
                console.log("\nyour html file has been generated\n");
            })
        }
    });
}

function generateCard(employee) {
    let cardHtml = `<div class="employee-card"> 
        <h1 class="employee-card-title"><span class="employee-card-name">${employee.name}</span> / ${employee.title} </h1>
        <div class="employee-card-info">
            <p>ID: ${employee.id}</p>
            <p>Email: ${employee.email}</p>`
    if (employee.title == "Manager") {
        cardHtml+=`<p>Office Number: ${employee.officeNumber}</p></div></div>`;
    } else if (employee.title == "Engineer") {
        cardHtml+=`<p>Github: ${employee.github}</p></div></div>`;
    } else if (employee.title == "Intern") {
        cardHtml+=`<p>School: ${employee.school}</p></div></div>`;
    }
    dynamicContent+=cardHtml;
}
