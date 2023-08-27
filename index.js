// Required Applications

const questions = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// Question bank for readme.md
const questBank = [
  {
    type: "input",
    message: "What is your project name?",
    name: "projectName",
    validate: (value) => {
      if (value.length < 1) {
        return `You must provide a name for your project`;
      }
      return true;
    },
    
  },
  {
    type: "input",
    message: "What is your Github user ID?",
    name: "username",
    validate: (value) => {
      if (value.length < 1) {
        return `You must provide a Github account`;
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is you email address?",
    name: "email",
    validate: (value) => {
      if (value.length < 1) {
        return `You must provide a email address`;
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Describe your project:",
    name: "projectDesc",
    validate: (value) => {
      if (value.length < 1) {
        return `You must provide a description for your project`;
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use:",
    name: "usage",
  },
  {
    type: "input",
    message: "How can people contribute to this project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How can you test this program?",
    name: "tests",
  },
  {
    type: "list",
    message: "Please selecte the type of license:",
    choices: ["MIT", "GNU", "Mozilla_Public_License_2.0", "None"],
    name: "license",
  },
];



// Create readme file in /new_readme
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err, result)=> {
  if  (err) throw err;
  console.log('Readme has been created!');
})
}

// initializes application and starts questions. 
function init() {
  questions.prompt(questBank).then((answers) => {
    writeToFile('./New_Readme/README.md', generateMarkdown(answers))
  });
}

// Function call to initialize app
init();
