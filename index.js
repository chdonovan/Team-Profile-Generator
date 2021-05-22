// modules
const inquirer = require('inquirer');
const { choices } = require('yargs');

// profile templates
const Manager = require('./lib/Manager');


// team array
const  teamArray = [];

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

        teamArray.push(manager);
        console.log(manager);
    })
    
};
 const addMember = () => {
     // optional console log

     return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "please list employee role",
            choices:["Engineer", "Intern"]
        },
        {
           type: "input",
           name: "name",
           message: "input employee name"
        },
        {
            type:"input",
            name: "id",
            message: "input employee id"
        },
        {
            type:"input",
            name: "email",
            message: "enter employee email"
        },
        {
            type: "input",
            name: "github",
            message: "input employees github username",
            when: (input) => input.role === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "input employees school",
            when: (input) => input.role === "Intern"
        },
        {
            type: "confirm",
            name: "confirmAddMember",
            message: "would you like to add more Employees?",
            default: false
        }

    ])
    .then(employeeData =>{
        // emplpyee type data
        let {name, id, email, github, school, confirmAddMember} = employeeData;
        let employee;

        if (role === "Engineer"){
            employee = new Engineer (name,id, email, github);

            console.log(employee);
        }
        else if  (role === "Intern"){
            employee = new Intern (name, id , email, school);
            
            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddMember) {
            return addMember(teamArray);
        }
        else {
            return teamArray;
        }

    })

};

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

managerInput()
 .then(addMember);