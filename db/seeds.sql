DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY(id)
);

CREATE TABLE role (
id INT AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL(10,2),
department_id INT,
PRIMARY KEY(id),
FOREIGN KEY (department_id)
REFERENCES department(id)
);

CREATE TABLE employee (
id INT AUTO_INCREMENT, 
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT, 
manager_id INT,
PRIMARY KEY(id),
FOREIGN KEY (role_id)
REFERENCES role(id),
FOREIGN KEY (manager_id)
REFERENCES employee(id)
);

INSERT INTO department (name)
VALUES ("sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES(1, "Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Account Manager", 160000, 1), 
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Jonh", "Doe", 1, null),
("Mike", "Chan", 1, 1), 
("Ashley", "Rodriguez", 2, null), 
("Kevin", "Tupik", 2, 3);



SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;