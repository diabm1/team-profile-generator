export const generateManager = (manager) => {
  return `
        <div class="card worker-card">
            <div class="card-header">
                <h2 class="card-tile">${manager.getName()}</h2>
                <h3 class="card-tile"><i class="fas fa-glasses mr-2">${manager.getRole()}</i></h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                    </li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
};

export const generateEngineer = (engineer) => {
  return `
        <div class="card worker-card">
            <div class="card-header">
                <h2 class="card-tile">${engineer.getName()}</h2>
                <h3 class="card-tile"><i class="fas fa-glasses mr-2">${engineer.getRole()}</i></h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}"
                        target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    `;
};

export const generateIntern = (intern) => {
  return `
        <div class="card worker-card">
            <div class="card-header">
                <h2 class="card-tile">${intern.getName()}</h2>
                <h3 class="card-tile"><i class="fas fa-user-graduate mr-2">${intern.getRole()}</i></h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                    </li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    `;
};

export const generateHTML = (html) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./asset/style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="area col-12 d-flex justify-content-center">
                ${html}
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `;

  //need help with getting functions tp generate on page
};

// export default {
//   generateManager,
//   generateEngineer,
//   generateIntern,
//   generateHTML,
// };

// module.exports = (team) => {
//   return `
//     <!DOCTYPE html>
//     <html lang="en">

//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Team</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//             integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//         <link rel="stylesheet" href="./asset/style.css">
//         <script src="https://kit.fontawesome.com/c502137733.js"></script>
//     </head>

//     <body>
//         <div class="container-fluid">
//             <div class="row">
//                 <div class="col-12 jumbotron mb-3 team-heading">
//                     <h1 class="text-center">My Team</h1>
//                 </div>
//             </div>
//         </div>
//         <div class="container">
//             <div class="row">
//                 <div class="area col-12 d-flex justify-content-center">
//                 ${generateTeam(team)}
//                 </div>
//             </div>
//         </div>
//     </body>

//     </html>
//     `;
// };
