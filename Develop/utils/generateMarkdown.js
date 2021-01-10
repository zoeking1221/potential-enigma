// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// set a new variable (lic) to pass into link 
// use join function
function renderLicenseBadge(license) {
  if (license !='No license') {
    var lic;
    switch(license) {
      case 'MIT':
        lic = "MIT"
        break; 
      case 'GNU GPLv3':
        lic = "GNU%20GPLv3"
        break; 
      case 'GNU AGPLv3':
        lic = "GNU%20AGPLv3"
        break; 
      case 'GNU LGPLv3':
        lic = "GNU%20LGPLv3"
          break; 
      case 'Mozilla Public License 2.0':
        lic = "Mozilla%20Public%20License%202.0"
        break; 
      case 'Apache License 2.0':
        lic = "Apache%20License%202.0"
        break; 
      case 'Boost Software License 1.0':
        lic = "Boost%20Software%20License%201.0"
        break;
    }
    return `![License badge](https://img.shields.io/badge/License-${lic}-brightgreen)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !='No license') {
    var lic;
    switch(license) {
      case 'MIT':
        lic = "mit"
        break; 
      case 'GNU GPLv3':
        lic = "gpl-3.0"
        break; 
      case 'GNU AGPLv3':
        lic = "agpl-3.0"
        break; 
      case 'GNU LGPLv3':
        lic = "lgpl-3.0"
          break; 
      case 'Mozilla Public License 2.0':
        lic = "mpl-2.0"
        break; 
      case 'Apache License 2.0':
        lic = "apache-2.0"
        break; 
      case 'Boost Software License 1.0':
        lic = "bsl-1.0"
        break; 
    } 
    return `https://choosealicense.com/licenses/${lic}/`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !='No license') {
    return `
  ## License 
  ${renderLicenseLink(license)}`
  }
  return ""  
}

// TODO: Create a function to generate markdown for README (writes a nice README file)
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${renderLicenseBadge(data.license)}
  \n
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Please access my Github via https://github.com/${data.github}.
  For other questions, please contact me via email at ${data.email}.

  ${renderLicenseSection(data.license)}
  `
}

module.exports = generateMarkdown;
