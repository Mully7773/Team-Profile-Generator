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
const employees = [];

const managerQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's ID number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is the manager's office number?"
            },
        ])
        .then((managerAns) => {
            // const manager = new Manager(
            //     managerAns.managerName,
            //     managerAns.managerId,
            //     managerAns.managerEmail,
            //     managerAns.managerOffice
            // );
            // employees.push(manager);
            
            console.log(managerAns);
            fs.writeFile('test.txt', JSON.stringify(managerAns, null, 2), (err) => {
                if (err) throw err;
                console.log("Success!")

                addMoreEmployees()
                //     .then((ans) => {
                //         if (ans.addAnotherEmployee) {
                //             questions();
                //         }
                //     })
            })
            
        })
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
                name: "employeeName",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "employeeID",
                message: "What is the employee's ID number?"
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "What is the employee's email address?"
            },
            {
                type: "input",
                name: "employeeGithub",
                message: "What is the engineer's Github username?",
                when: (input) => input.employeePosition === "Engineer" //used to determine whether this question should be asked
            },
            {
                type: "input",
                name: "employeeSchool",
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
            if (employeeResponse.addAnotherEmployee) {
                addMoreEmployees()
            } else {
                writeToHtml();
            }

    
        })
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

// const writeToHtml = data => {
//     fs.writeFile("./dist/index.html", JSON.stringify(data, null, 2), err => {
//         if (err) throw err;
//                 console.log("Success!")
//     })
// }


managerQuestions()