// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const licenseChoices = [
    { name: 'MIT License', value: 'MIT' },
    { name: 'Apache License 2.0', value: 'Apache-2.0' },
    { name: 'GNU GPLv3', value: 'GNU GPLv3' },
    { name: 'NONE', value: 'NONE' }
];
const questions = [
    {
        type: "input",
        name: "description",
        message: "was is your page about?",

    },

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
        name: "license",
        message: "what licenses are you using?",
        choices: licenseChoices
    },

    {
        type: "input",
        name: "title",
        message: "name of your project",
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
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    //ask tge questions
    inquirer.prompt(questions).then((anwsers) => {
        console.log(".thenrunning")
        //pass the answers to the big string
        const string = generateMarkdown(anwsers)
        // write the file with that string
        writeToFile("readme.md", string)
    })
}

// Function call to initialize app
init();

