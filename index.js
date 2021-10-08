// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown.js')
const util = require('util');
// TODO: Create an array of questions for user input
const questions = [
    //Project title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    //Describe project
    {
        type: 'input',
        name: 'description',
        message: 'What is the project about?. Describe detail about your project:'
    },
    //Content table
    {
        type: 'input',
        name: 'table of contents',
        message: 'Table of Contents',
    },
    //Install instructions
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
    },
    //Usage instructions
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?',
    },
    //project license
    {
        type: 'list',
        name: 'license',
        message: 'What licence is being used in this project?',
        choices: [
            "MIT",
            "CPOL",//"Code Project Open License"
            "CDDL",//Common Development and Distribution License
            "Ms-PL",//Microsoft Public License
            "MPL 2.0",//Mozilla Public License 2.0 
            "CPL",//Common Public License Version 1.0 
            "Eclipse Public",//Eclipse Public License 1.0
            "Apache License",//Apache License, Version 2.0
        ]
    },
    //technologies that project being built with
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Please select technologies that this project built with',
        choices: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    },
    //contribution guid
    {
        type: 'input',
        name: 'contributor',
        message: 'Who were the contributors to this project?',
    },
    //test instructions
    {
        type: 'input',
        name: 'test',
        message: 'What is command needed to test this project?',
    },
    //question contact
    {
        type: 'input',
        name: 'question',
        message: 'Contact info for inquiries.',
    },
    //github account
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    //email address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}
// const writeFileAsync = util.promisify(writeToFile);
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('test.md', generateReadMe(answers));
            console.log(answers)
        })
}

// Function call to initialize app
init();
