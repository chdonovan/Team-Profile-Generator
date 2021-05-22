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

}

// generates HTML

const generatePage = function (employeeCards) {

}