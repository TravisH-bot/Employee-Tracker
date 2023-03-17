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
    console.log("You selected View All Employees");
    db.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department, role.salary, employee.manager_id FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (department.id = role.department_id)",
      (err, data) => {
        err ? console.log(err) : console.log("\n");
        console.table(data);
      }
    );

    init();
  },

  "Add Employee": () => {
    console.log("You selected Add Employee");
    db.query("SELECT id as value, title AS name FROM role", (err, data) => {
      console.table(data);
      db.query(
        'SELECT CONCAT(first_name, " ", last_name) AS name, id AS value FROM employee WHERE manager_id IS null',
        (err, userData) => {
          console.table(userData);
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
              type: "list",
              message: "What is the employee's role?",
              choices: data,
              name: "role_id",
            },
            {
              type: "list",
              message: "Who is the employee's manager?",
              choices: userData,
              name: "manager_id",
            },
          ]).then(({ first_name, last_name, role_id, manager_id }) => {
            db.query(
              `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${first_name}", "${last_name}", "${role_id}", "${manager_id}")`,
              (err, data) => {
                err ? console.log(err) : console.log("\n");
                init();
              }
            );
          });
        }
      );
    });
  },

  "Update Employee Role": () => {
    console.log("You selected Update Employee Role");
    init();
  },

  "View All Roles": () => {
    console.log("You selected Update Employee Role");
    db.query("SELECT * FROM role", (err, data) => {
      err ? console.log(err) : console.log("\n");
      console.table(data);
    });
    init();
  },

  "Add Role": () => {
    console.log("You selected Add Role");
    db.query(
      "SELECT id AS value, department as name FROM department",
      (err, data) => {
        // console.log(data);
        prompt([
          {
            type: "input",
            message: "What is the name of the role?",
            name: "title",
          },
          {
            type: "input",
            message: "What is the salary of the role?",
            name: "salary",
          },
          {
            type: "list",
            message: "Which department does the role belong to?",
            choices: data,
            name: "department_id",
          },
        ]).then(({ title, salary, department_id }) => {
          db.query(
            `INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${department_id}")`,
            (err, data) => {
              err ? console.log(err) : console.log("\n");
              init();
            }
          );
        });
      }
    );
  },

  "View All Departments": () => {
    console.log("You selected View All Departments");
    db.query("SELECT * FROM department", (err, data) => {
      err ? console.log(err) : console.log("\n");
      console.table(data);
    });
    init();
  },

  "Add Department": () => {
    console.log("You selected Add Department");
    prompt([
      {
        input: "input",
        message: "What is the name of the department?",
        name: "department",
      },
    ]).then(({ department }) => {
      db.query(
        `INSERT INTO department (department) VALUES ("${department}")`,
        (err, data) => {
          err ? console.log(err) : console.log("\n");
          init();
        }
      );
    });
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
