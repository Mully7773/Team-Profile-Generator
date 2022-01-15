// third-party module
const inquirer = require("inquirer");

//built-in module
const fs = require("fs");

//custom modules:
const generateHTML = require("./src/page-template")

const manager = require("./lib/Manager");
const intern = require("./lib/Intern");
const engineer = require("./lib/Engineer");



const questions = () => {
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
        ])
        .then((ans) => {
            console.log(ans)
        })
}

questions()
