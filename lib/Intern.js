// require Employee
const Employee = require('./Employee');

// Intern Extension
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email,);
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;