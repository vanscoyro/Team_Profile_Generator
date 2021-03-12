//requires the Employee.js file to use the object constructor
const Employee = require("./Employee");


//the Engineer class will extend the Employee class
class Engineer extends Employee{
    
    //Engineer class constructor has 4 fields
    
    constructor(name, id, email, github) {
    
        //Employee super Class 
    
        super(name, id, email);
    
        //added unique field of the Engineer class
    
        this.github = github
    }

    getRole() {
        return "Engineer";
    }

    getGitHub() {
        return this.github;
    }

//exports the Engineer class as a module
} module.exports = Engineer;