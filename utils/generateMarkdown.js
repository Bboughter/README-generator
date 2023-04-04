// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  let badge;
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPL':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'CC-BY-SA':
      badge = '[![License: CC-BY-SA](https://licensebuttons.net/l/by-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-sa/3.0/)';
      break;
    case 'ISC':
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    default:
      badge = '';
      break;
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  let link;
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU GPL':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'CC-BY-SA':
      link = 'https://creativecommons.org/licenses/by-sa/3.0/';
      break;
    case 'ISC':
      link = 'https://opensource.org/licenses/ISC';
      break;
    default:
      link = '';
      break;
  }
  return link;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
