const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');


// creates engineer{}
test ('creates an Engineer object',() => {
    const engineer = new Engineer('Chris', 1 , 'chrisdonovan311@gmail.com', 'chdonovan');

    expect(engineer.github).toEqual(expect.any(String));
});
// get role
test('gets employee role', ()=> {
    const engineer = new Engineer('Chris', 1, 'chrisdonovan311@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");

});