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
            message: "What is the manager's name?"
          },
      
          {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?"
          },
      
          {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
          },
      
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
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
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }