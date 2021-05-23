// Employee construct
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

// Employee object

test('creates a Employee object', () =>{
    const employee = new Employee("Chris", 1 , "chrisdonovan311@gmail.com", 2338);
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
// Name
test('gets employee name', ()=> {
    const employee = new Employee('Chris', 1, 'chrisdonovan311@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));

});
// ID
test('gets employee ID', ()=> {
    const employee = new Employee('Chris', 1, 'chrisdonovan311@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));

});
// Email
test('gets employee email', ()=> {
    const employee = new Employee('Chris', 1, 'chrisdonovan311@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));

});
test('gets employee role', ()=> {
    const employee = new Employee('Chris', 1, 'chrisdonovan311@gmail.com');

    expect(employee.getRole()).toEqual("Employee");

});
