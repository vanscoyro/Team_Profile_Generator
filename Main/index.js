const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputDirectory = path.resolve(__dirname, "output")
const outputPath = path.join(outputDirectory, "team.html");

const render = require("./src/page-template.js");

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
                name : "engineerName",
                message : "What is the engineer's name?"
            },
            {
                type : "input",
                name : "engineerId",
                message : "What is the engineer's ID number?"
            },
            {
                type : "input",
                name : "engineerEmail",
                message : "What is the engineer's email?"
            },
            {
                type : "input",
                name : "engineerGithub",
                message : "What is the engineer's GitHub username?"
            }
        ]).then(choice =>{
            
            const engineer = new Engineer(choice.engineerName, choice.engineerId, choice.engineerEmail, choice.engineerGithub);
            
            //takes the user response and pushes the responses to the team members Array
            teamMembers.push(engineer);

            //also pushes the id number to the id Array
            idArray.push(choice.engineerId);

            //runs the createTeam function to prompt user 
            createTeam();
        })


    }

    function addIntern () {

        inquirer.prompt([
            {
                type : "input",
                name : "internName",
                message : "What is the intern's name?"
            },
            {
                type : "input",
                name : "internId",
                message : "What is the intern's ID number?"
            },
            {
                type : "input",
                name : "internEmail",
                message : "What is the intern's email?"
            },
            {
                type : "input",
                name : "internSchool",
                message : "What is the intern's school?"
            }
        ]).then(choice =>{
            
            const intern = new Intern(choice.internName, choice.internId, choice.internEmail, choice.internSchool);
            
            //takes the user response and pushes the responses to the team members Array
            teamMembers.push(intern);

            //also pushes the id number to the id Array
            idArray.push(choice.internId);

            //runs the createTeam function to prompt user 
            createTeam();
        })

    }

    function buildTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(outputDirectory)) {
          fs.mkdirSync(outputDirectory)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }
    

    assignManager();
}

mainMenu();