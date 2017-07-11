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
  notes.addNote(argv.title, argv.body);
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

var tester = {
  testOne: 'This is a test',
  testTwo: 'Also a test...',
};

var testJSON = JSON.stringify(tester);

fs.writeFileSync('test.json', testJSON);
var data = fs.readFileSync('test.json')
console.log(data);
data = JSON.parse(data);
console.log(data);
