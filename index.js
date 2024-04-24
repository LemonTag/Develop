// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "what is your Github username",
    },

    {
        type: "input",
        name: "email",
        message: "what is your email",
    },

    {
        type: "list",
        name: "description",
        message: "what is a description",
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE']
    },
    
    {
        type: "input",
        name: "title",
        message: "name of your project",
    },

    {
        type: "input",
        name: "description",
        message: "description of you project?",
    },
    
    {
        type: "input",
        name: "installation",
        message: "tell us what installations you used?",
    },
    

    {
        type: "input",
        name: "usage",
        message: "what usage information you used?",

    },
    
    {
        type: "input",
        name: "Contributing",
        message: "who helped you Contribut your work?",

    },

    {
        type: "input",
        name: "test",
        message: "what kind of test did you do?",

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
        console.log(".thenrunning")
        //pass the answers to the big string
        const string = generateMarkdown(anwsers)
        // write the file with that string
       writeToFile("readme.md", string)
    })
}

// Function call to initialize app
init();


const generateMarkdown = require('./utils/generateMarkdown');