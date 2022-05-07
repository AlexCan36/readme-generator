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
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    }, {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
    },
     {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles. If you followed tutorials, include links to those here as well.  ",
    },
    {
        type: "input",
        name: "licence",
        message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.",
        choices: ['MIT', 'Apache 2.0' , 'GNU'],
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        const markdown = generateMarkdown(answers)
        writeToFile("README.md", markdown)
    })
 }

// Function call to initialize app
init();
