// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      name: 'name',
      type: 'input',
      message: 'What is your name?'
    },
    {
      name: 'title',
      type: 'input',
      message: 'What is the title of this project?'
    },
    {
      name: 'description',
      type: 'input',
      message: 'Short Description of the project'
    },
    {
      name: 'installInstructions',
      type: 'input',
      message: 'Installation instructions?'
    },
    {
      name: 'usage',
      type: 'input',
      message: 'Usage information?'
    },
    {
      name: 'contribution',
      type: 'input',
      message: 'Contribution guidelines?'
    },
    {
      name: 'tests', 
      type: 'input',
      message: 'Test instructions?'
    },
    {
      name: 'license',
      type: 'list',
      message: 'Please select a license for this README:',
      choices: ['BSD', 'MIT', 'GPL']
    },
    {
      name: 'githubUserName',
      type: 'input',
      message: 'Github Username?'
    },
    {
      name: 'email',
      type:'input',
      message: 'Email address?'
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    const readmeText = generateMarkdown(answers)
    fs.writeFile(fileName, readmeText,  
        (err => err ? console.log('Error writing file') : console.log('Success!')));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then (answers => {
    writeToFile('README.md', answers)
  })
}

// Function call to initialize app
init();
