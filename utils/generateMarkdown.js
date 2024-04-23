// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { //img.shields.io/badge/javascript-yellow, img.shields.io/badge/nodejs-green
  if (license !== none) {

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
*[installation](#installation)
*[installation](#installation)
*[installation](#installation)
  ${(renderLicenseSection(date.license))}
`;
}

module.exports = generateMarkdown;
