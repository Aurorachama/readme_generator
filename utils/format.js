const formatMarkDown = data => {
//if they are any, conditional
const apacheBadge = `[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
const gplBadge =`[![License: GNU GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
const mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
const iscBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;

let licenseBadge;

(data.license === 'Apache License 2.0') ? (licenseBadge = apacheBadge) : (licenseBadge);
(data.license === 'GNU GPLv3') ? (licenseBadge = gplBadge) : (licenseBadge);
(data.license === 'MIT') ? (licenseBadge = mitBadge) : (licenseBadge);
(data.license === 'ISC') ? (licenseBadge = iscBadge) : (licenseBadge);


//the format of markdown
    return `
# ${data.fileName}

## Table of Content: 
* [Description](#Description)
* [Installation](#Installation)
* [User Guide](#User-Guide)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Contact](#Contact)

## Description \n
${data.description}

## Installation \n
${data.installGuide}

## User Guide \n
${data.userGuide}

## Contributing \n
${data.contriGuide}

## Tests \n
${data.testGuide}

## License
${licenseBadge}

## Contact \n
Github: [${data.gitUserName}](https://github.com/${data.gitUserName})

Email: [${data.email}](mailto:${data.email})
    `
}

module.exports = formatMarkDown;