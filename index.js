// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');
const { start } = require('repl');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'projectTitle',
        type: 'input',
        message: 'What is your Project Title:'
    },
    {
        name: 'projectDescription',
        type: 'input',
        message: 'Please enter a description of your project:'
    },
    {
        name: 'Instillation',
        type: 'input',
        message: 'What are the instillation instructions for this project.'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How would you like your application to be used?'
    },
    {
        name: 'licenseType',
        type: 'list',
        choices: 'Which license would you like to use?'
        ['Apache License 2.0', 'MIT License', 'ISC']
    },
    {
        name: 'username',
        type: 'input',
        message: 'What is your Github Username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Who contributed on this project?'
    },
    {
        name: 'test',
        type: 'input',
        message: 'What are the test instruction'
    }
];


// TODO: Create a function to write README file
////function generateMarkdown(data) {
  //  return'
//  # ${repl.title}
//  $(badge)
//  $(data.decription)
// # Table of Contents

// - [Description](#description)
// - [Instillation](#instillation)
//  - [Usage](#usage)
// - [Contributating](#contributing)
// - [Test](#test)
//  - [Credits](#test)
//  - [License](#license)
//  - [Questions](#questions)

//  ## Description:
//  ![License](http://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

//     ${response.description}
//  ## Installation:
//     ${response.instillation}
// ## Usage:
//    ${response.usage}
// ## Contributing:
//    ${response.contribution}
//## Test:
 // ${response.test}
// ## License:
 // For more information about the license, click the link.

 //  -[Licens](https://opensource.org/lis=censes/${responce.license})
//';
//}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err)
            return
        }

    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log('answers: ', answers)
            // Use user feedback for... whatever!!
            const readmeTemplate = generateMarkdown(answers);
            writeToFile('GENERATED README.md', readmeTemplate);
        })
        .catch((error) => {
            console.log(error);
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
