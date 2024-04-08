#! /usr/bin/env node


                        // TO DO 
                        
// npx todo-list_15325

// Modules
import inquirer from "inquirer";
import chalk from "chalk";

// Code

let todoList = [];

let condition = true;

while(condition)
{
let todoQues = await inquirer.prompt(
    [
        {
            name: "addTodo",
            type: "input",
            message: chalk.green("What do you want to add to your to-do list? ")
        },

        {
            name: "addMore",
            type: "confirm",
            default: "true",
            message: chalk.green("Do you want to add more to your to-do list? ")
        },
    ]
)

condition = todoQues.addMore;
todoList.push(todoQues.addTodo);

let i ;
for (i = 0 ; i < todoList.length ; i++) {
    console.log(chalk.bgGray.cyanBright(todoList[i]));
}

}
