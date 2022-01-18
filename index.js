// third-party module
const inquirer = require("inquirer");

//built-in module
const fs = require("fs");

//custom modules:
const generateHTML = require("./src/page-template")

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//empty array to save newly created employees
const employeesArray = [];

const managerQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email address?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?"
            },
        ])
        .then((managerAns) => {
            const manager = new Manager(
                managerAns.name,
                managerAns.id,
                managerAns.email,
                managerAns.officeNumber
            );
            employeesArray.push(manager);
            
            
            

                addMoreEmployees()
                //     .then((ans) => {
                //         if (ans.addAnotherEmployee) {
                //             questions();
                //         }
                //     })
            
            
        })
        .catch(error => console.log(error));
}



function addMoreEmployees() {
    return inquirer
        .prompt([
            // {
            //     type: "confirm",
            //     message: "Do you want to add employees?",
            //     name: "employeeConfirm"
            // },
            {
                type: "list",
                name: "employeePosition",
                message: "Please choose your employee's position.",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email address?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's Github username?",
                when: (input) => input.employeePosition === "Engineer" //used to determine whether this question should be asked
            },
            {
                type: "input",
                name: "school",
                message: "What school does the intern attend?",
                when: (input) => input.employeePosition === "Intern"
            },
            {
                type: "confirm",
                name: "addAnotherEmployee",
                message: "Would you like to add another employee?",

            }
        ])
        .then((employeeResponse) => {
            if (employeeResponse.employeePosition === "Engineer") {
            const engineer = new Engineer(
                employeeResponse.name,
                employeeResponse.id,
                employeeResponse.email,
                employeeResponse.github
            );
            employeesArray.push(engineer);
            }
            if (employeeResponse.employeePosition === "Intern") {
            const intern = new Intern(
                employeeResponse.name,
                employeeResponse.id,
                employeeResponse.email,
                employeeResponse.school
            );
            employeesArray.push(intern);
            }
            if (employeeResponse.addAnotherEmployee) {
                addMoreEmployees()
            } else {
                writeToHtml();
            }

        
        })
        .catch(error => console.log(error));
//         .then ((employeeResponse => {
//             console.log(employeeResponse);
//             addMoreEmployees()
//                     // .then((ans) => {
//                     //     if (ans.addAnotherEmployee) {
//                     //         addMoreEmployees()
//                     //     }
//                     // })
//         }))
}


const writeToHtml = data => {
    fs.writeFile("./dist/index.html", generateHTML(employeesArray), err => {
        if (err) throw err;
                console.log("Successfully rendered to HTML!")
    })
}


managerQuestions()

//add validation
