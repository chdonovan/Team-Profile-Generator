// require employee
const Employee = require('./Employee');
// Engineer extension
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email,);
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }

}
// exports Engineer
module.exports = Engineer;