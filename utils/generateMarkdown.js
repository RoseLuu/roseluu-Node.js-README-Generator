// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      badge = '(https://img.shields.io/badge/license-MIT-blue.svg)'
      break;
    case 'CPOL':
      badge = '(https://img.shields.io/badge/license-CPOL-blue.svg)'
      break;
    case 'CDDL':
      badge = '(https://img.shields.io/badge/license-CDDL-blue.svg)'
      break;
    case 'Ms-PL':
      badge = '(https://img.shields.io/badge/license-Ms-PL-blue.svg)'
      break;
    case 'MPL 2.0':
      badge = '(https://img.shields.io/badge/license-MPL%202.0-blue.svg)'
      break;
    case 'CPL':
      badge = '(https://img.shields.io/badge/license-CPL-blue.svg)'
      break;
    case 'Eclipse Public':
      badge = '(https://img.shields.io/badge/license-Eclipse%20Public-blue.svg)'
      break;
    case 'Apache License':
      badge = '(https://img.shields.io/badge/license-Apache%20License-blue.svg)'
      break;
  }
  return badge
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      link = '(https://choosealicense.com/licenses/mit/#)'
      break;
    case 'CPOL':
      link = '(https://www.codeproject.com/info/cpol10.aspx)'
      break;
    case 'CDDL':
      link = '(https://opensource.org/licenses/CDDL-1.0)'
      break;
    case 'Ms-PL':
      link = '(https://opensource.org/licenses/MS-PL)'
      break;
    case 'MPL 2.0':
      link = '(https://choosealicense.com/licenses/mpl-2.0/)'
      break;
    case 'CPL':
      link = '(https://opensource.org/licenses/cpl1.0.php)'
      break;
    case 'Eclipse Public':
      link = '(https://www.eclipse.org/legal/epl-2.0/)'
      break;
    case 'Apache License':
      link = '(https://choosealicense.com/licenses/apache-2.0/)'
      break;
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `[![GitHub license]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

   ${renderLicenseSection(data.license)}

  # Table of Contents 
  * [Installation](#installation)
  * [Technologies](#technologies)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
 
  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Technologies
  ${data.technologies}

  # Usage
  ${data.usage}

  # License
  This project is licensed under the ${data.license} license. 

  # Contribution
  ​Contributors: 
  ${data.contributor}

  # Tests
  The following is needed to run the test: 
  ${data.test}

  # Questions
  Please contact if there is any question:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;
