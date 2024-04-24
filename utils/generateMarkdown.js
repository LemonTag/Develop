// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

      if (license !== "NONE") {
        return `*[License](#license)`
      }
      return ""
    }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
      if (license !== "NONE") {
        return `
  ## license
  this project is license with ${license}`
      }
      return ""
    }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let licenseBadge = "";

    // Define license badges
    switch (data.license) {
      case "MIT":
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Apache-2.0":
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "GNU GPLv3":
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      default:
        licenseBadge = "";
    }
    
  
      return `# ${data.title} 
 ## Description
 ${data.description}
## Table of Contents
-[Installation](installation)
-[Usage](usage)
-[Questions](questions)
-[Test](test)


## License
${licenseBadge}

## Installation
${data.installation}

## usage
${data.usage}

## Questions 
If you have questions find me at ${data.email} or https://github.com/${data.username}
`;
}
module.exports = generateMarkdown;

