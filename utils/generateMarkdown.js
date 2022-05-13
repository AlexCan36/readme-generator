// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `# License
  ${license}`
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

function renderDescription(description) {
  return `# Description
 ${description}`
}

function renderInstallation(installation) {
  return `# Installation : What command should we run to install
 ${installation}`
}

function renderUsage(usage) {
  return `# Usage : What command should we run to test
 ${usage}`
}

function renderCredits(credits) {
  return `# Credits : Any collaborators
 ${credits}`
}

function renderQuestions(questions) {
  return `# Questions : https://github.com/AlexCan36/AlexCan36.git
 ${questions}`
}

function renderInquires(inquires) {
  return `# Additional questions? Reach me at: 'test@gmail.com'
 ${inquires}`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.title}
  ${renderDescription(data.description)}
  ${renderInstallation(data.installation)}
  ${renderUsage(data.usage)}
  ${renderCredits(data.credits)}
  ${renderQuestions(data.questions)}
  ${renderInquires(data.inquires)}
  ${renderLicenseBadge()}
  ${renderLicenseLink()}
  ${renderLicenseSection()}
`;
}

module.exports = generateMarkdown;
