// db express router
const notes = require('express').Router();
// helpers readfromdfile and readandappend
const { readAndAppend, readFromFile } = require('../helpers/fsUtils')
const fs = require('fs');
// random id 
const { v4: uuidv4 } = require('uuid');
const app = require('.');
const { createConnection } = require('net');

// get route to retrieve all the notes from db.json
notes.get('/', (req, res) =>     
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// post route for submitting the note
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend( newNote, './db/db.json');
        res.json('Notes added successfully 🚀');
    } else {
        res.error('Error in adding note');
    }
})

notes.delete('/:id', (req, res) => {
    const { id } = req.params
    fs.readFile(`./db/db.json`, "utf8", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotes = JSON.parse(data);
            const note = parsedNotes.filter( x => {
                return x.id !== id;
            })
            res.json(id)
            fs.writeFile(`./db/db.json`, JSON.stringify(note), {
                encoding: "utf8",
                flag: "w",
                mode: 0o666
              },
              (err) => {
                if (err)
                  console.log(err);
                else {
                  console.log("deleted")
                }
            })
        }
    })
})

// module exports 
module.exports = notes;