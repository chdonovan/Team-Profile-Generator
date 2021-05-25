// manager card function
const generateManager = function (manager) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header>"
                <h3> Manager</h4>
                <h4> ${manager.name}</h3>
                
            </div>
            <div class = "card-body">
                <p> ID: ${manager.id}</p>
                <p> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
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
                <h3> Engineer</h4>
                <h4> ${engineer.name}</h3>
                
            </div>
            <div class = "card-body">
                <p> ID: ${engineer.id}</p>
                <p> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p> Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a> </p>
            </div>
        </div>
    </div> 

    `;
}
// intern card function
const generateIntern = function(intern){
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header>"
                <h3> Intern</h4>
                <h4> ${intern.name}</h3>
        
            </div>
            <div class = "card-body">
                <p> ID: ${intern.id}</p>
                <p> Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p> School: ${intern.school}</p>
            </div>
        </div>
    </div> 

    `;
};

// push array to page

htmlGenerate = (data) => {

    // cards array
    pageArray = [];

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
        <meta name= "viewport" content= "width=device-width">
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
            <div class = "container">
                <div class = "row justify-content-center" id= "team-cards">
                    <!-- Team Cards -->
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>

`;
}
// export to index
module.exports = htmlGenerate;