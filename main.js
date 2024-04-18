import inquirer from "inquirer";
let todo_List = [];
let while_Condition = true;
while (while_Condition === true) {
    // -------------options-------------
    let options = await inquirer.prompt([
        {
            type: "list",
            name: "userOption",
            choices: ["Add", "Remove"],
            message: "Select an Option",
        },
    ]);
    // ------------------add-----------------
    if (options.userOption === "Add") {
        let answer = await inquirer.prompt([
            {
                type: "input",
                name: "userAnswer",
                message: "write task to add in your to do list.",
            },
        ]);
        if (answer.userAnswer !== "") {
            todo_List.push(answer.userAnswer);
            console.log(todo_List);
        }
        else {
            console.log("Please write something to add in you todo list.");
        }
    }
    //-------------------Remove-------------------
    else if (options.userOption === "Remove") {
        let removeChoice = await inquirer.prompt([
            {
                type: "list",
                name: "removeItem",
                message: "Select Item To Remove.",
                choices: todo_List,
            },
        ]);
        let induxRemove = todo_List.indexOf(removeChoice.removeItem);
        if (induxRemove >= 0) {
            todo_List.splice(induxRemove, 1);
            console.log(`you removed :${removeChoice.removeItem}`);
            console.log(todo_List);
        }
    }
    //--------------------------confirmation------------------------
    let user_ans = await inquirer.prompt([
        {
            type: "confirm",
            name: "selection",
            message: "do you want to continue?",
            default: true,
        },
    ]);
    if (user_ans.selection === false) {
        while_Condition = false;
    }
}
console.log("Thank you for using todo list.");
