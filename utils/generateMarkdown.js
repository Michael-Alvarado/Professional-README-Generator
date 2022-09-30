// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      break;
    case 'Boost Software License 1.0':
      return 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
      break;
    case 'BSD 2-Clause License':
      return 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
      break;
    case 'BSD 3-Clause License':
      return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
      break;
    case 'CC0 1.0':
      return 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)';
      break;
    case 'Eclipse Public License 2.0':
      return 'https://img.shields.io/badge/License-EPL_2.0-red.svg';
      break;
    case 'GNU AGPLv3':
      return 'https://img.shields.io/badge/License-AGPL_v3-blue.svg';
      break;
    case 'GNU GPLv2':
      return 'https://img.shields.io/badge/License-GPL_v2-blue.svg';
      break;
    case 'GNU GPLv3':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case 'GNU LGPLv2':
      return 'https://img.shields.io/badge/License-LGPL_v3-blue.svg';
      break;
    case 'MIT License':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'MPL 2.0':
      return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
      break;
    case 'The Unlicense':
      return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'BSD 2-Clause License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'BSD 3-Clause License':
      return 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'CC0 1.0':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Eclipse Public License 2.0':
      return 'https://opensource.org/licenses/EPL-2.0';
      break;
    case 'GNU AGPLv3':
      return 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU GPLv2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'GNU LGPLv2':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
      break;
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'MPL 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'The Unlicense':
      return 'http://unlicense.org/';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents
  
  -[Installation](#installation)
  -[Usage](#Usage)
  -[License](#License)
  -[How To Contribute](#How To Contribute)
  -[Tests](#Tests)
  -[Questions](#Questions)

  ## Installation
  
  How to install:
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## License
  
  ${renderLicenseSection(data.license)}

  ## How To Contribute
  
  ${data.contribute}

  ## Tests
  
  Steps necessary to test:
  ${data.test}

  ## Questions
  
  Feel free to reach out to me if you have any questions. Contact info below:
  -[GitHub](https:://github.com/${data.github})
  -Email: ${data.email}
`;
}

module.exports = generateMarkdown;
