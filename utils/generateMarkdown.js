// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license !== none) {
return `![Github license](https://img.shields.io/badge/license-${license}-blue)
![Node Badge](https://img.shields.io/badge/nodejs-green)
![Javascript Badge](https://img.shields.io/badge/javascript-orange)
`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== none) {
    return license`[license](https://github.com/LemonTag/Develop)`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
if (license !== none) {
  function renderLicenseSection(license) { license }
  return `
  ## license
  this project is license with ${license}`
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.description}
  ## description
  ${data.description}
${renderLicenseSection(data.license)}
  ###Table of Contents
*[Installation](#installation)
*[Questions](#questions)
${renderLicenseLink(license)}
*[Test](#test)
*[Description](#description)
*[Usage](#usage)
*[Contributing](#contributing)

  ${(renderLicenseSection(date.license))}
`;
}

module.exports = generateMarkdown;
