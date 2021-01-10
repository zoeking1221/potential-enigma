// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your Github username!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter the title of your project!');
              return false;
            }
        }    
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description of your project!');
              return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        validate: intallationInput => {
            if (intallationInput) {
              return true;
            } else {
              console.log('Please provide installation steps for your project!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please provide instructions and usage examples for your project!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines for how other developers can contribute to your project.',
        validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('Please provide contribution guidelines for your project!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests for your project.',
        validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('Please provide examples for how to run tests for your project!');
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: [
            'MIT', 
            'GNU GPLv3',
            'GNU AGPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'Boost Software License 1.0',
            'No license'
          ]
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
