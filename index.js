// TODO: Include packages needed for this application

const questions = require("inquirer");
const markupMaker = require("./utils/generateMarkdown.js");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questBank = [
  {
    type: "input",
    message: "What is your project name?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Describe your project:",
    name: "projectDesc",
  },
  {
    type: "input",
    message: "Enter the installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Do you have any credits to add?",
    name: "credits",
  },
  {
    type: "input",
    message: "Describe the features in your program?",
    name: "features",
  },
  {
    type: "input",
    message: "How can people contribute to this project?",
    name: "contribute",
  },
  {
    type: "list",
    message: "Please selecte the type of license:",
    choices: ["MIT", "GNU GPL v3", "Mozilla Public License 2.0"],
    name: "license",
  },
];




questions.prompt(questBank).then((answers) => {
  let readmeDoc = (markupMaker.generateMarkdown(answers));
return readmeDoc  
})






// // TODO: Create a function to write README file
// function writeToFile(readme, fileCont) {

//   console.log(fileCont)

// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
