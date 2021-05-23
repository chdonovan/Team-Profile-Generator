// manager card function
const generateManager = function (manager) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header>"
                <h3> ${manager.name}</h3>
                <h4> Manager</h4>
            </div>
            <div class = "card-body">
                <p> ID: ${manager.id}</p>
                <p> Email: ${manager.email}</p>
                <p> Office Number: ${manager.office}</p>
            </div>
        </div>
    </div> 

    `;
}

// engineer card function
const generateEngineer = function(engineer){
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header>"
                <h3> ${engineer.name}</h3>
                <h4> Engineer</h4>
            </div>
            <div class = "card-body">
                <p> ID: ${engineer.id}</p>
                <p> Email: ${engineer.email}</p>
                <p> Github: ${engineer.github}</p>
            </div>
        </div>
    </div> 

    `;
}
// intern card function
const generateInter = function(intern){
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header>"
                <h3> ${intern.name}</h3>
                <h4> Intern</h4>
            </div>
            <div class = "card-body">
                <p> ID: ${intern.id}</p>
                <p> Email: ${intern.email}</p>
                <p> School: ${intern.school}</p>
            </div>
        </div>
    </div> 

    `;
};

// push array to page

htmlGenerate = (data) => {

    // cards array

    for (let i =0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        // manager function
        if (role === "Manager") {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
        // engineer function
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }
        // intern function
        if (role === "Intern") {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

    }

    // joins strings
    const employeeCards = pageArray.join('')

    // generate page return

    const generateTeam = generatePage(employeeCards);
    return generateTeam;
}

// generates HTML

const generatePage = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name= "viewport" content= "width=device-width, inital -scale=1.0">
        <title> MY TEAM </title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class = "navbar" id = "navbar">
             <span class ="navbar-brand" id ="nav-bar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class = "conatainer">
                <div class = "row justify-content-center" id= "team-cards">
                    <!-- Team Cards -->
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>

    </html>

`;
}
// export to index
module.exports = htmlGenerate;