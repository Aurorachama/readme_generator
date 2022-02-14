const question = [
    {
        type: 'input',
        message: 'This is a Readme (Markdown) Generator! What will the title of your project? Note: This will be the name of the markdown file.',
        name: 'fileName',
        validate: (fileName) => {
            return (fileName) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'What is the description of your Project?',
        name:'description',
        validate: (description) => {
            return (description) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Then, what will be the installation process for the users?',
        name: 'installGuide',
        validate: (installGuide) => {
            return (installGuide) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Cool. What goes into the User Guide?',
        name: 'userGuide',
        validate: (userGuide) => {
            return (userGuide) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'A Contribution Guide for other developers?',
        name: 'contriGuide',
        validate: (contriGuide) => {
            return (contriGuide) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'A Test Instructions for users or other developers?',
        name: 'testGuide',
        validate: (testGuide) => {
            return (testGuide) ? (true) : (false);
        }
    },
    {
        type: 'list',
        message: 'How do you want to license your project?',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your username on Github?',
        name: 'gitUserName',
        validate: (gitUserName) => {
            return (gitUserName) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'How about a email address contacting you?',
        name: 'email',
        validate: (email)=> {
            return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? (true) : (false);
        }
    },
]

module.exports = question;