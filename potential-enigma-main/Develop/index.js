// TODO: Include packages needed for this application
const fs = require('fs'); // For file system operations
const inquirer = require('inquirer'); // For user prompts

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
  // Add more questions for user input as needed
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

// TODO: Create a function to initialize app
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

// Function call to initialize app
init();
