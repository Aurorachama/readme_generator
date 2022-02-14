const fs = require('fs');
const inquirer = require('inquirer');
// question array
const questions = require('./utils/question');
//Formating
const format = require('./utils/format');


inquirer
    //prompt question
    .prompt(questions)

    .then ((data) => {
        //response goes to format.js for formatting
        const formattedData = format(data);
        //the filename and extention type
        const fileName = `${data.fileName.split(' ').join('')}.md`;
        //writefile using fs /w err and success message
        fs.writeFile(fileName, formattedData, (err) => err ? console.log('Something went wrong generating the file, Could you try again?') : console.log('Your markdown file have been successfully generated! Go check it out!'));
    });