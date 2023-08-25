// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = require('inquirer');
const markupMaker = require('./utils/generateMarkdown.js').answerObj;


questions
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Enter the installation instructions:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the usage information:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Do you have any credits to add?',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'Please selecte the type of license:',
        choices: ['MIT', 'GNU GPL v3', 'Mozilla Public License 2.0'],
        name: 'license',
      },

  ])
  .then((answers) => {
  
  console.log(answers);
  const answerObj = answers;
  })




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
