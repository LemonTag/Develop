// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "description",
        message: "what is a description"
    },

    {
        type: "list",
        name: "description",
        message: "what is a description",
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE']
    },
    
    {
        type: "input",
        name: "description",
        message: "what is a description"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile("readme.md", string,(err)=>{
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() { 
    //ask tge questions
    inquirer.prompt(questions).then((anwsers) =>{
        //pass the answers to the big string
        const string = generateMarkdown(anwsers)
        // write the file with that string
       writeToFile("readme.md", string)
    })
   
   
}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');