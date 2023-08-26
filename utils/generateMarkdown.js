// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string




function renderLicenseBadge(license) {


let licBadge = ""
if (license == "MIT"){

  licBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`

}
if (license == "GNU GPL v3"){

    licBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`

}
if (license == "Mozilla Public License 2.0"){

    licBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`

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


## Badges

${renderLicenseBadge(data.license)}

## Features

${data.features}

## How to Contribute

${data.contribute}

`;
}

module.exports = {generateMarkdown,}
