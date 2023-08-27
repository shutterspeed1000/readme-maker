// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "None"){
  return ''
}
return `![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)`

}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return ''
  }
  return `
- [License](#license)`
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return ''
  }
  return `

## License

This application is covered under the ${license} license`

}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
## ${renderLicenseBadge(data.license)}

## Description

${data.projectDesc}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)${renderLicenseLink(data.license)}
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribute}${renderLicenseSection(data.license)}

## Tests

${data.tests}

## Questions

For more of my projects, please visit https://github.com/${data.username}

Do you have questions or suggestions for this application?
Contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
