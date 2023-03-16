const mysql = require("mysql2");
const { prompt } = require("inquirer");
const consoleTable = require("console.table");
const figlet = require("figlet");

// figlet("Employee \n Tracker", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "employees_db",
  },
  console.log(`Connected to the employees_tracker database`)
);

//Function to initialize the prompt
const init = async () => {
  const response = await prompt(initQuestions);
  options[response.choice]();
};

const options = {
  "View All Employees": () => {
    db.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department, role.salary, employee.manager_id FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (department.id = role.department_id)",
      (err, data) => {
        err ? console.log(err) : console.log("\n");
        console.table(data);
      }
    );

    init();
  },

  "Add Employee": (first_name, last_name, role_id, manager_id) => {
    prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name",
      },
      {
        type: "input",
        message: "What is the employee's role?",
        name: "role_id",
      },
      {
        type: "input",
        message: "Who is the employee's manager?",
        name: "manager_id",
      },
      () => {
        db.query(
          `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${first_name}", "${last_name}", "${role_id}", "${manager_id}")`
        ),
          console.log("New employee added.");
        init();
      },
    ]);
  },

  "Update Employee Role": () => {
    console.log("You selected option 3");
    init();
  },

  "View All Roles": () => {
    console.log("You selected option 4");
    db.query("SELECT * FROM role", (err, data) => {
      err ? console.log(err) : console.log("\n");
      console.table(data);
    });
    init();
  },

  "Add Role": (role_id) => {
    prompt([
      {
        input: "input",
        message: "What is the name of the role?",
        name: "role_id",
      },
      () => {
        db.query(`INSERT INTO role ${role_id}`);
        console.log("You selected option 5");
        init();
      },
    ]);
  },

  "View All Departments": () => {
    // console.log("You selected option 6");
    db.query("SELECT * FROM department", (err, data) => {
      err ? console.log(err) : console.log("\n");
      console.table(data);
    });
    init();
  },

  "Add Department": (department) => {
    prompt([
      {
        input: "input",
        message: "What is the name of the department?",
        name: "department",
      },
      () => {
        db.query(`INSERT INTO department ${department}`);
        console.log("You selected option 7");
        init();
      },
    ]);
  },
};

const initQuestions = [
  {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: Object.keys(options),
  },
];

init();
