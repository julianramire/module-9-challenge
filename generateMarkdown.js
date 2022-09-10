// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)'
  } if (license === 'APACHE') {
    return '![GitHub license](https://img.shields.io/badge/license-APACHE-blue.svg)'
  } if (license === 'APACHE2') {
    return '![GitHub license](https://img.shields.io/badge/license-APACHE2-blue.svg)'
  } if (license === 'GPL') {
    return '![GitHub license](https://img.shields.io/badge/license-GPL-blue.svg)'
  } if (license === 'NONE') {
    return ''
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'NONE') {
    return ''
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'NONE') {
    return ''
  } else {
    return `## License
    This project is license under ${license}
    
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.Title}

  ${renderLicenseBadge(data.License)}

  ## Description

  Provide a short description explaining how, what, and why your project works.

  ${data.Description}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributers)
  ${renderLicenseLink(data.License)}
  * [Questions](#questions)

  ## Installation

  How does a user install your project?
  ${data.Installation}

  ## Usage

  Explain how to use your project and give examples of how.
  ${data.Usage}

  ## Contributers

  List any people that helped along the way.
  Provide links to their Github.
  Provide links to any material you found helpful
  ${data.Contributing}

  ### Features

  If your project as many features, list some of the most prevalent here
  ${data.Features}

  ### How to Contribute

  If others want to help contribute to the project, email me
  ${data.Email}

  ### Questions

  If you have any questions, you can email me at ${data.Email}
  You can see more of my work at [${data.Github}](https://github.com/${data.Github})
`;
}

module.exports = generateMarkdown;

