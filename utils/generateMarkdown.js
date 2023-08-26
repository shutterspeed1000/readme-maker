// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string




function renderLicenseBadge(license) {
console.log(`License is ${license}`)

let licBadge = ""
if (license == "MIT"){

  licBadge = `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`

}
if (license == "GNU GPL v3"){

    licBadge = `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`

}
if (license == "Mozilla Public License 2.0"){

    licBadge = `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`

}
return licBadge

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

#${data.projectName}

## Description

${data.projectDesc}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}
${renderLicenseBadge(data.license)}


## Badges

## Features

${data.features}

## How to Contribute

${data.contribute}


${renderLicenseBadge(data.license)}
`;
}

module.exports = {generateMarkdown,}
