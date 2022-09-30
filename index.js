// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project',
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A description is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the necessary steps to install your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information for this project'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Describe how others can contribute to your project'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe the necessary steps to test your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license type for this project repository',
        choices: ['Apache License 2.0', 'Boost Software License 1.0', 'BSD 2-Clause License',
                    'BSD 3-Clause License', 'CC0 1.0', 'Eclipse Public License 2.0',
                    'GNU AGPLv3', 'GNU GPLv2', 'GNU GPLv3', 'GNU LGPLv2', 'MIT License', 
                    'MPL 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A username is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('An email is required to continue.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./Generated/${fileName}`, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log('File created successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        return data;
    })
    .then(data => {
        writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();

