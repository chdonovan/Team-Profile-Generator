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

}
// intern card function
const generateInter = function(intern){

};

// push array to page

htmlGenerate = (data) => {

}

// generates HTML

const generatePage = function (employeeCards) {

}