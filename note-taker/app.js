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
  note ? console.log(`New Note - Title: ${note.title}, Body: ${note.body} - has been successfully added!`) : console.log('ERROR: Title already exists');
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  console.log('Removing note');
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
