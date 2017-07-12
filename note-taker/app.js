const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
        .command('add', 'Add a new note', {
          title: titleOptions,
          body: bodyOptions
        })
        .command('list', 'List all notes')
        .command('read', 'Read a note', {
          title: titleOptions
        })
        .command('remove', 'Remove a note', {
          title: titleOptions
        })
        .help()
        .argv;

let command = process.argv[2];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  note ? notes.logNote(note) : console.log('ERROR: Title already exists');

} else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  note ? notes.logNote(note) : console.log('Note cannot be found');
} else if (command === 'remove') {
  notes.removeNote(argv.title) ? console.log('Note has been successfully removed!') : console.log('ERROR: Note does not exist');
} else {
  console.log('Command not recognized');
}
