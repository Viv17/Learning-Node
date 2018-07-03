const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const titleOptions =  {
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
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('list', 'List all notes')
  .help()
  .argv; //easier to use compared to process.env
var command = argv._[0];  

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Added');
    console.log(note.title, note.body);
  } else {
    console.log('Duplicate Note entry');
  }
}
else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  console.log(message = noteRemoved ? 'Note was Removed' : 'Note not found');
}
else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if(note){
    notes.logNote(note);
  }else {
  console.log('Note not found');
}
}
else if (command === 'list') {
  var allNotes = notes.getAll();
  if(allNotes.length > 0){
    allNotes.forEach(note => {
      notes.logNote(note);  
    });
  }else {
    console.log('No Notes to display');
  }
}
else {
  console.log('Command not recognized');
}