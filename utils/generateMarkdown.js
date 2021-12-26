// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  ## Licensing
  '![License](https://img.shields.io/badge/License-${data.license}-green.svg)'

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#cquestions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any further questions you can contact me at:
  * Github: https://github.com/${data.github}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
