const { prompt } = require("inquirer");

const init = async () => {
  const response = await prompt(initQuestions);
  options[choice]();
};

const options = {
  option1: () => {
    console.log("You selected option 1");
    init();
  },
  option2: () => {
    console.log("You selected option 2");
    init();
  },
  option3: () => {
    console.log("You selected option 3");
    init();
  },
  option4: () => {
    console.log("You selected option 4");
    init();
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
