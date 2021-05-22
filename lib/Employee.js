// build employee constructor
class Employee {
    constructor( name, id , email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getting data from input
    getName (){
        return this.name;
    }
    getId (){
        return this.id;
    }
    getEmail (){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
};
// exports class
module.exports = Employee;