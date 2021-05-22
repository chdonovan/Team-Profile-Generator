const inquirer = require('inquirer');

// function for intial user prompt
function userPropmt(){
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
            name: "officeNumb",
            message: "Input Office Number"
        },
        
    ])
}
userPropmt();