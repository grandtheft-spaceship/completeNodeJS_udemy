const fs = require('fs');

console.log("Starting notes.js")

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  } catch(error) {
    return new Array;
  };
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};


var getAll = () => {
  console.log('Getting all nodes');
};

getNote = (title) => {
  console.log('Getting note', title)
};

removeNote = (title) => {
  console.log('Removing note', title);
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
