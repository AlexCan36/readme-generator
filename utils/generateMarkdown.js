// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(label,message,color) {
  return ` ![GitHub Badge](https://img.shields.io/static/v1?label=${label}&message=${message}&color=${color})`
}

function renderDescription(description) {
  return `## Description
 ${description}`
}

function renderInstallation(installation) {
  return `## Installation : What command should we run to install
 ${installation}`
}

function renderUsage(usage) {
  return `## Usage : What command should we run to test
 ${usage}`
}

function renderCredits(credits) {
  return `## Credits : Any collaborators
 ${credits}`
}

function renderGithub(github) {
  return `## github : https://github.com/${github}`
}

function renderEmail(email) {
  return `## Additional questions? Reach me at: ${email}`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `${renderLicenseBadge(data.badgelabel , data.badgemessage , data.badgecolor)}
  # ${data.title}
  ${renderDescription(data.description)}
  ${renderInstallation(data.installation)}
  ${renderUsage(data.usage)}
  ${renderCredits(data.credits)}
  ${renderGithub(data.github)}
  ${renderEmail(data.email)}
`;
}

module.exports = generateMarkdown;
