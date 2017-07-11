console.log("Starting notes.js")

var addNote = (title, body) => {
  console.log('Adding a note ', title, body);
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
