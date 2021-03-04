//requires the Employee.js file to use the object constructor
const Employee = require("./Employee");

//the Intern class will extend the Employee class
class Intern extends Employee {

  //Engineer class constructor has 4 fields
  constructor(name, id, email, school) {
    
    //Employee super class 
    super(name, id, email);
    
    //The one unique field of Intern that isn't part of the super
    this.school = school;

    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
    
}

//exports the Intern class as a module
module.exports = Intern;
