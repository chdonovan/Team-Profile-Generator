// intern requiremant
const Intern = require('../lib/Intern');

// creates Intern
test ('creates an Intern object',() => {
    const intern = new Intern('Chris', 1 , 'chrisdonovan311@gmail.com', 'UT');

    expect(intern.school).toEqual(expect.any(String));
});
// get role
test('gets employee role', ()=> {
    const intern = new Intern('Chris', 1, 'chrisdonovan311@gmail.com');

    expect(intern.getRole()).toEqual("Intern");

});