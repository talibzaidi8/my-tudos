#! /usr/bin/env node
import inquirer from "inquirer";

async function manageTodos() {
  let todos = [];
  let condition = true;

  while (condition) {
    let todosQuestion = await inquirer.prompt([
      {
        name: "firstQuestion",
        type: "input",
        message: "What do you want to add in your todos?",
      },
      {
        name: "secondQuestion",
        type: "confirm",
        message: "Do you want to add more in your todos?",
        default: true,
      },
    ]);

    todos.push(todosQuestion.firstQuestion);
    condition = todosQuestion.secondQuestion;
    console.log(todos);
  }
}

manageTodos();
