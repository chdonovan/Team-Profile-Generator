// manager construct
const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

// manager object

test('creates a employee object', () =>{
    const manager = new Manager("Chris", 1 , "chrisdonovan311@gmail.com", 2338);
    expect(manager.office).toEqual(expect.any(Number));
});

// ID

test('gets employee role', ( )=> {
    const manager = new Manager("Chris", 90, "Chrisdonovan311@gmail.com");

    expect(manager.getRole()).toEqual("Manager");
});