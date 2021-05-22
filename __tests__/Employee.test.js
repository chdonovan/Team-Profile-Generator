// manager construct
const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

// manager object

test('creates a Manager object', () =>{
    const manager = new Manager("Chris", 1 , "chrisdonovan311@gmail.com", 2338);
    expect(manager.office).toEqual(expect.any(Number));
});