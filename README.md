# Team-Profile-Generator

This is a Node application that uses the npm package inquirer to take user input and write information about employees to an HTML page. This application also contains tests that demonstrate proper test-driven-development.

## How to install

1. Clone the repo and be sure to have Node.js installed.
2. Use the command "npm install" to install the necessary npm packages.

## Usage

* You can start the application by typing the following command in your integrated terminal:

`node index.js`

* The user is prompted to add information about the manager followed by the option to select the employee type. Users may select the following an unlimited number of times for employee type:
    * Engineer
    * Intern

* The prompts for the manager, engineer, and intern all include:
    * Name
    * ID (number)
    * Email address

* Additional prompts:
    * Office number (Manager)
    * Github username (Engineer)
    * School name (Intern)

* After successful completion of the prompts, an HTML page is generated in the dist folder that illustrates each employee's role.

## Tools:

1. HTML
2. CSS
3. JavaScript
4. Bootstrap
5. Node.js
6. Inquirer npm package
7. Jest npm package


## Built with:

1. Visual Studio Code
2. Chrome DevTools
3. Markdown


## Author:

Nick Mullenmeister