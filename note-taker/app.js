console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;

let command = process.argv[2];
console.log('Command: ', command);
// console.log('Process: ', process.argv);
console.log('Yargs: ', yargs.argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  note ? notes.logNote(note) : console.log('ERROR: Title already exists');

} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  note ? notes.logNote(note) : console.log('Note cannot be found');
} else if (command === 'remove') {
  notes.removeNote(argv.title) ? console.log('Note has been successfully removed!') : console.log('ERROR: Note does not exist');
} else {
  console.log('Command not recognized');
}
