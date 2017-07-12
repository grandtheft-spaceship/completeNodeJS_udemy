const fs = require('fs');

console.log("Starting notes.js")

var addNote = (title, body) => {
  var notes = new Array;
  var note = {
    title,
    body
  };
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(error) {

  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
