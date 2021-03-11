const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = required("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = [];
const idArray = [];

function mainMenu() {
    
    //function that takes user input and creates a manager object
    function assignManager() {
        inquirer.prompt([
            {
                type : "input",
                name : "managerName",
                message : "What is the manager's name?",
            },
            {
                type : "input",
                name : "managerId",
                message : "What is the manager's ID?"
            },
            {
                type : "input",
                name : "managerEmail",
                message : "What is the manager's email?"
            },
            {
                type : "input",
                name : "managerPhone",
                message : "What is the manager's phone number?"
            }
        ]).then(response => {

            //takes the user response and pushes the responses to the team members Array
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerPhone);
            teamMembers.push(manager);
            
            //also pushes the id number to the id Array
            idArray.push(response.managerId)
            createTeam();
        })

    }

    //function to choose which type of entry user will be inputting
    function createTeam() {
        inquirer.prompt([
            {
                type : "list",
                name : "teamMemberChoice",
                message : "Which type of team member would you like to add?",
                choices : 
                [
                    "Engineer",
                    "Intern",
                    "I'm done adding team members!"
                ]
            }
        ]).then(choice =>{
            //switch statement to check the user's choice and 
            switch (choice.teamMemberChoice) {
                
                //the Engineer and Intern choice run the code to add the selected choice
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                //default case to be choosen if user does not choose Engineer or Intern      
                default : 
                    buildTeam();        
            }

        })
    }

    function addEngineer () {

        inquirer.prompt([
            {
                type : "input",
                name : "inputName",
                message : "What is the engineer's name?"
            },
            {
                type : "input",
                name : "inputId",
                message : "What is the engineer's ID number?"
            },
            {
                type : "input",
                name : "inputEmail",
                message : "What is the engineer's email?"
            }
        ])


    }

    function addIntern () {

    }

    function buildTeam () {

    }

    assignManager();
}

mainMenu();