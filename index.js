// packages needed to run in the command line
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// questions utilized for README creation
const questions = [
    // project title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter a title!')
            }
        }
    },
    // description
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            }
            else {
                console.log('Please enter a description!')
            }
        }
    },
    // installation
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the steps required to install your project. (Required)',
        validate: instInput => {
            if (instInput) {
                return true;
            }
            else {
                console.log('Please enter an installation process!')
            }
        }
    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples on how to utilize your project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('Please enter usage examples!')
            }
        }
    },
    // contributions
    {
        type: 'input',
        name: 'contributions',
        message: 'How would people go about contributing to your project? (Required)',
        validate: contInput => {
            if (contInput) {
                return true;
            }
            else (
                console.log('Please enter a guideline on how to contribute!')
            )
        }
    },
    // tests
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how you would test your projects? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            }
            else {
                console.log('Please explain how you would test your project!')
            }
        }
    },
    // license
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license that applies to your project. (Required)',
        choices: ['MIT', 'GPLv3', 'AGPLv3', 'LGPLv3', 'Apache', 'Mozilla', 'Boost', 'Unlicense'],
        validate: liscInput => {
            if (liscInput) {
                return true;
            }
            else {
                console.log('Please choose a license that applies!')
            }
        }
    },
    // github username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('Please provide your github username!')
            }
        }
    },
    // email information
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please enter an email!')
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;

            console.log('Your README.md is complete!')
    })
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(user) {
        writeToFile('yourREADME.md', generateMarkdown(user));
        });
};

// function call to initialize app
init();