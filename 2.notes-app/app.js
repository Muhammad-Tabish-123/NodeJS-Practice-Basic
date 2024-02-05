// --------------------------------------
// const fs=require('fs');
// fs.writeFileSync("notes.txt","My name is T. ");
// fs.appendFileSync("notes.txt","Appende text Here. ");

// -------------------------------------------------
// const fname = require("./utils.js").fname;
// console.log(fname);

// -------------------------------------------------
// const add = require("./utils.js").add;
// let sum = add(10, 40);
// console.log(sum);

// -----------------Challange#1 create and require a function--------------------------------
// const notesFn = require("./notes");
// console.log(notesFn());

// -----------------Importing Npm moduels--------------------------------
// const validator = require("validator");
// console.log(validator.isEmail("abc@gmail"));
// console.log(validator.isURL("https://gmail."));

// -----------------Challange#2 use chalk library in your projet--------------------------------
// 1-------version 2.4.1
// 2-------use to print success in console in green
//3-------Additional: Maketext bold and inversed
// const chalk = require("chalk");
// console.log(chalk.green("Success"));
// console.log(chalk.blue("Success"));
// console.log(chalk.bold("Success"));
// console.log(chalk.bold.green("Success"));
// console.log(chalk.bold.green.inverse("Success"));
// console.log(chalk.green.inverse("Success"));

// -----------------Install nodemon package globally "-g" --------------------------------
// 1-------version 1.18.5
// 2-------check if package is installed "nodemon -v" only works on cmd
// 3--------use command to allow execution "Set-ExecutionPolicy Unrestricted"
// 4------- start project with nodemon instead of node "nodemon filename"

// ----------------- Gertting input from user --------------------------------
// ----------------yargs version 12.0.2
// -File System and Command Line Args (Notes App)
const yargs = require("yargs");
yargs.version("1.5.0");
const add = require("./utils");
console.log(process.argv);

console.log(yargs.argv);

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function () {
    console.log("remove a note");
  },
});

if (process.argv[2] == "add") {
  console.log("Adding option");
} else if (process.argv[2] == "remoove") {
  console.log("remoove option");
}

// // Create add command
// yargs.command({
//   command: "add",
// });
