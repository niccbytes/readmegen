// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // Import the generateMarkdown function

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project: ',
  },
  {
    type: 'input',
    name: 'tableOfContents', // Fix the name with spaces
    message: 'Provide a table of contents for your project: ',
  },
  {
    type: 'input',
    name: 'installations',
    message: 'Provide Installations used if any: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of your project?: ',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide any contributions: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide any tests: ',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Provide any questions: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license: ',
    choices: ['MIT', 'GNU GPLv3', 'other']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Provide your github: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your email: ',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Use the fs module to write the data to a file with the given filename
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md has been created successfully!');
    }
  });
}

// TODO: Create a function to initialize the app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate the README content using the answers
    const readmeContent = generateMarkdown(answers);
    // Specify the filename for the README
    const fileName = 'README.md';
    // Write the README file
    writeToFile(fileName, readmeContent);
  });
}

// Function call to initialize the app
init();
