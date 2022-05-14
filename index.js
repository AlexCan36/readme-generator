// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Whats your project name?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of what your project will be?",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be use for installation?",
        default: "npm i",
    }, {
        type: "input",
        name: "usage",
        message: "What command should be run to run test?",
        default: "npm test",
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators.",
    },
    {
        type: "list",
        name: "licence",
        message: "Pick your project",
        choices: ['MIT', 'Apache 2.0', 'GNU', 'None'],
    },
    {
        type: "input",
        name: "github",
        message: "Whats your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "Whats your email?",
    },
    {
        type: "input",
        name: "badgelabel",
        message: "What label do you want on your badge?",
    },
    {
        type: "input",
        name: "badgemessage",
        message: "What message do you want on your badge?",
    },
    {
        type: "list",
        name: "badgecolor",
        message: "What color do you want on your badge?",
        choices: ['red' , 'blue' , 'green' , 'blueviolet' , 'orange'],
    },
    
];

//https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
// TODO: Create a function to write README file
function writeToFile(data) {
    var fs = require('fs')
    var logger = fs.createWriteStream('log.md', {
        
    })

    logger.write(data) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        const markdown = generateMarkdown(answers)
        writeToFile(markdown)
    })
}

// Function call to initialize app
init();
