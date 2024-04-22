// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


const inquirer = require('inquirer')

inquirer
    .prompt([{
        type: "input",
        name: "projectname",
        message: "what's your project name.",
    }
  
    {
        type: "list",
        name: "favoriteTech",
        message: "what's your favorite tech.",
        chocies: ["HTML", "CSS", "Node", "Javascript"]

    }
    ])
    
    .then((projectName, favortieTech) => {
        // Use user feedback for... whatever!!
        (console.log(projectName, favortieTech))
    })
    
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });