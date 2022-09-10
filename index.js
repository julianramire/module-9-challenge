// TODO: Include packages needed for this application
// const inquirer = require('inquirer');
const path = require('path');

const fs = require('fs');
const inquirer  = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Give a description about your project',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'If needed, describe how to install your project',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples of your project in use for the Usage section',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'List any other contributers Github, as well as helpful links you came across',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license for your project',
        choices: ['MIT', 'APACHE', 'APACHE2', 'GPL', 'NONE'],
    },
    {
        type: 'input',
        name: 'Features',
        message: 'Describe some of your many features displayed on your project',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Submit your Github username',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Submit your email',
    },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        fs.writeFileSync(path.join(process.cwd(),'/dist','README.md'), generateMarkdown(data))
    })
};

// Function call to initialize app
init();
