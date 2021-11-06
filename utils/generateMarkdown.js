// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `<img src="https://img.shields.io/badge/License-${license}-green" alt="license Badge" />`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, license, description, installInstructions, usage, contribution, githubUserName, email}) {
  return `${renderLicenseBadge(license)}
  
  
  # ${title}
  ## Description
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)
  ## Installation
  ${installInstructions}
  ## Usage
  ${usage}
      
  ## Contributing
  ${contribution}
  ## License
  
  ## Questions
  [Ask me on my github profile](http://www.github.com/${githubUserName})
  
  Any additional questions, reach me at my email ${email}
  `;
}

module.exports = generateMarkdown;
