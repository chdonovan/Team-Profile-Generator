// require Employee.js
const Employee = require('./Employee') ;

// extends employee construct

class Manager extends Employee {
    constructor (name, id , email, office){
        super(name, id , email);
        this.office = office;
    }

    getRole(){
        return "Manager";
    }
}

// export Manager

module.exports = Manager;