class Employee {

    //employee constructor that has 3 arguments
    //name, id, and email

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee"
    }
    
//exports the Employee class as a module
} module.exports = Employee;