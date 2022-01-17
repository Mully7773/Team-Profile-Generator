const Employee = require("./Employee.js"); //grants access to Employee.js

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {  //was not in the Ins-README instructions
        return this.officeNumber;
    }
    getRole() {
        return "Manager"; //overwrites "Employee"
    }
}
module.exports = Manager;