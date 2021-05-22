// modules
const inquirer = require('inquirer');

// profile templates
const Manager = require('./lib/Manager');

// function for intial user prompt
function managerInput(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Input Manger's Name"
        },
        {
            type: "input",
            name: "id",
            message: "Input Employee ID"

        },
        {
            type: "input",
            name: "email",
            message: "input email address"
        },
        {
            type: "input",
            name: "office",
            message: "Input Office Number"
        }
        
    ])
    .then(mgrInput => {
        const {name, id , email, office} = mgrInput;
        const manager = new Manager (name, id, email, office);

        //teamArray.push(manager);
        console.log(manager);
    })
    
}

// function addMember(){
//     return inquirer.prompt([
//         { 
//             type: "list",
//             name: "add members",
//             message: "would you like to add more team members?",
//             choices: ["yes", "no"]
//         }
//     ])
// }

managerInput();
//addMember();