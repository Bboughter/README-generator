// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation steps if needed.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide user instructions for the user.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license you would like to use for your project:',
        choices: [
            'MIT',
            'GNU GPL',
            'Apache',
            'CC-BY-SA',
            'ISC',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please list any contributors for your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any testing instructions.'
    },
    {
        type: 'input',
        name: 'question1',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'question2',
        message: 'Please provide your GitHub repository.'
    },
    {
        type: 'input',
        name: 'question3',
        message: 'Please provide your email.'
    }
];

inquirer.prompt(questions)
.then(answers => {
    const markdown = generateMarkdown(answers);
    
    fs.writeFile('README.md', markdown, err =>{
        if (err) {
            console.error(err);
            return
        }
        console.log('README file created!')
    })
})
.catch(err => console.error(err));
