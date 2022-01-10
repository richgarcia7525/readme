// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return ``;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)';
    case 'MIT License':
      return '[MIT License](https://mit-license.org/)';
    case 'ISC License':
      return '[ISC License](https://www.isc.org/licenses/';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## License
${renderLicenseLink(licenseType)}
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('data', data);
  return `
# ${data.projectTitle}
## Description 
${data.projectDescription}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
## Installation
## Usage 
## Credits
${renderLicenseSection(data.licenseType)}

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
---
🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Question
[${data.githubUsername}](https://github.com/${data.githubUsername})
`;
}

module.exports = generateMarkdown;
