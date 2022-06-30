import {
  generateManager,
  generateEngineer,
  generateIntern,
  generateHTML,
} from "./src/template.js";

import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";

import inquirer from "inquirer";
import fs from "fs";
import { type } from "os";

const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
      validate: (input) => {
        if (input) {
          return true;
        }
        console.log("Please input a name!");
        return false;
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the manager id: ",
      validate: (input) => {
        if (isNaN(input)) {
          console.log("Please enter the right id!");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the manager's email:",
      //   validate: (input) => {},
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter the manager's office number:",
      //   validate: (input) => {},
    },
  ]);
};

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
      validate: (input) => {
        if (input) {
          return true;
        }
        console.log("Please input a name!");
        return false;
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the engineer id: ",
      validate: (input) => {
        if (isNaN(input)) {
          console.log("Please enter the right id!");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the engineer's email:",
      //   validate: (input) => {},
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Please enter the engineer's github username:",
      //   validate: (input) => {},
    },
  ]).then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubUsername)
    const html = generateEngineer(engineer);
    team += html
    createTeam();
  });
};

const addIntern = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (input) => {
          if (input) {
            return true;
          }
          console.log("Please input a name!");
          return false;
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the input id: ",
        validate: (input) => {
          if (isNaN(input)) {
            console.log("Please enter the right id!");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the intern's email:",
        //   validate: (input) => {},
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school:",
        //   validate: (input) => {},
      },
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        const html = generateIntern(intern);
        team += html
        createTeam();
      });
  };

let team = "";

addManager().then((answers) => {
  console.log(answers);
  // Create a new manager object with the answers
  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
  // Create the HTML for a manager with that manager object
  const html = generateManager(manager);
  team += html;

createTeam()

  

  //   console.log(html)
});

const createTeam = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Which team member would you like to add",
      choices: ["Engineer", "Intern", "exit"],
    },
  ]).then((answers) => {
    console.log(answers);
    if (answers.choice === "Engineer") {
      addEngineer()
    }
    if (answers.choice === "Intern") {
      addIntern()
    }
    if (answers.choice === "exit") {
      const html = generateHTML(team);
      fs.writeFile("./dist/index.html", html, (err) => {
        if(err){
            console.log(err)
        } else {
            console.log("file created successfully!")
        }
      })
    }
  })
};
