// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username (Required)'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project (Reqiured)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines for how other developers can contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'Apache 2', 'GPL', 'MIT/Apache-2.0']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('Success!');
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data))
    }) 
}

// Function call to initialize app
init();
