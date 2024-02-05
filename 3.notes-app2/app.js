const note = require("./notes.js");
const yargs = require("yargs");
// yargs.version('1.1.0');
// console.log(process.argv);

yargs.command({
  command: "add",
  describe: "add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove new note",
  builder: {
    title: {
      describe: "note title to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.remove(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler() {
    note.listAll();
  },
});

yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "note title to read",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    note.readNote(argv.title);
  },
});

// yargs.parse();
console.log(yargs.argv);
