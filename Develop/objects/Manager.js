//imports the Employee module
const Employee = require("./Employee");

//the Manager class will be extending the Employee class
class Manager extends Employee {

    //The Manager constructor has 4 classes
    constructor(name, id, email, officeNumber) {
        
        //these are the three fields that are from the extended Employee class
        super(name, id, email);
        
        //this field is unique to Manager
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

//this exports the Manager class as a module 
module.exports = Manager;
