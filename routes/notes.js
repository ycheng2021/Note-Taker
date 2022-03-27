// db express router
const notes = require('express').Router();
// helpers readfromdfile and readandappend
const { readAndAppend, readFromFile } = require('../helpers/fsUtils')

// random id 
const { v4: uuidv4 } = require('uuid');

// get route to retrieve all the notes from db.json
notes.get('/', (req, res) =>     
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// post route for notes on html
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };
        readAndAppend( newNote, './db/db.json');
        res.json('Notes added successfully 🚀');
    } else {
        res.error('Error in adding note');
    }
})

// module exports 
module.exports = notes;