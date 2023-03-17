# Employee Tracker

![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)

## Description

The Employee Tracker allows users to view the current employee structure of a company by several different parameters. Users can view all employees, all roles, all departments, add a department, add a role, add an employee, and update an employee role.

## Table Of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```
npm i
```

The dependencies for the project are console.table, figlet, inquirer, and mysql2

## Usage

1. 
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

![employee1](https://user-images.githubusercontent.com/79767820/225819599-261f35eb-5b13-4072-9285-44e86198e901.png)

2.
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

![employee2](https://user-images.githubusercontent.com/79767820/225819616-7b9d061c-a506-4359-b8bb-48f2a31bde89.png)

3.
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

![employee3](https://user-images.githubusercontent.com/79767820/225819620-eb52b570-6eb6-469e-aa2c-89c7d31454bf.png)

4.
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

![employee4](https://user-images.githubusercontent.com/79767820/225819629-6f1349cb-3d5a-4457-bdfd-f3045466a51e.png)

5.
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

![employee5A](https://user-images.githubusercontent.com/79767820/225819635-23a0c19b-3e1e-48a9-b074-d32cbbb2c2ad.png)

![employee5B](https://user-images.githubusercontent.com/79767820/225819648-7322f076-213e-4ccb-9c16-36e83a1baacd.png)

6.
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

![employee6A](https://user-images.githubusercontent.com/79767820/225819659-de20c422-6288-4ffd-a07b-813c71ced094.png)

![employee6B](https://user-images.githubusercontent.com/79767820/225819669-7a89056b-3547-48c6-8710-388a3f70f26a.png)

7.
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

![employee7A](https://user-images.githubusercontent.com/79767820/225819678-1139d7ef-c43c-4358-96e6-0033b6b60dc3.png)

![employee7B](https://user-images.githubusercontent.com/79767820/225819683-3af5efa4-7a1d-4b96-a57e-d07c265fefde.png)

8.
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

![employee8A](https://user-images.githubusercontent.com/79767820/225819692-5767f08b-fd0f-474a-b233-f9ddbefa4b28.png)

![employee8B](https://user-images.githubusercontent.com/79767820/225819695-4a2efea2-0021-46ae-9056-8c6f44f94309.png)

Mock-Up

The following video will demonstrate how the project is used. https://drive.google.com/file/d/1HtH0d5dYXMgau45p4cZWP5zjQhwKrrWM/view

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

## Contributing

Open an issue or email directly

## Tests

To run tests, run the following command:

```
npm test
```

## Questions

If you have any questions about the repo, open an issue or contact me directly at travishackbarth@gmail.com. You can find more of my work at TravisH-bot (https://github.com/TravisH-bot).
