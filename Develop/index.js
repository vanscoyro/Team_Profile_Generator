const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = required("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = [];
const idArray = [];

function mainMenu() {
    
    function assignManager() {

    }

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
        ]).then(userChoice =>{
            switch (userChoice.teamMemberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "I'm done adding team members!":
                    buildTeam();
                default : 
                    buildTeam();        
            }

        })
    }

    function addEngineer () {

    }

    function addIntern () {

    }

    function buildTeam () {

    }

    assignManager();
}

mainMenu();