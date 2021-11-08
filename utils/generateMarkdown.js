// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license != 'None') {
    return `<img src="https://img.shields.io/badge/License-${license}-green" alt="license Badge" />`
  } else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license == 'None') {
    return '';
  }
  if (license == 'BSD') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
  } else if (license == 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license == 'GPL') {
    licenseLink = 'https://opensource.org/licenses/GPL-3.0'
  }
  return `License Documentation] documentation](${licenseLink})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license != 'None') {
      return `This project is protected under ${license} License.
      ${renderLicenseLink(license)}`
  } else {
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const {title, license, description, installInstructions, usage, contribution, githubUserName, email, name} = answers;
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
  ${renderLicenseSection(license, name, title, description)}
  ## Questions
  [Ask me on my github profile](http://www.github.com/${githubUserName})
  
  Any additional questions, reach me at my email ${email}
  `;
}


module.exports = generateMarkdown;
