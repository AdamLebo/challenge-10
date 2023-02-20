const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];
const idArray = [];

console.log(
    '\nUse `npm run reset` to reset the dist/ folder\n'
  );

  function runApp () {

    function createTeam () {
      inquirer.prompt([{
        type: "list",
        message: "Select an Employee to Add",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
      }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            htmlBuilder();
        }
      })
    }

    function addManager() {
        inquirer.prompt ([
          
          {
            type: "input",
            name: "managerName",
            message: "Enter the manager's name"
          },
      
          {
            type: "input",
            name: "managerId",
            message: "Enter the manager's employee ID number"
          },
      
          {
            type: "input",
            name: "managerEmail",
            message: "Enter the manager's email address"
          },
      
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter the manager's office number"
          }
      
        ]).then(answers => {
          const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
          teamArray.push(manager);
          createTeam();
        }); 
    }
  }
  function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's name"
      },

      {
        type: "input",
        name: "engineerId",
        message: "Enter the engineer's employee ID number" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email address"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "Enter the engineer's GitHub username"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }
  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "Enter the intern's name"
      },

      {
        type: "input",
        name: "internId",
        message: "Enter the intern's employee ID number" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "Enter the intern's email address"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }
  function htmlBuilder () {
    console.log("Team Created")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

runApp();