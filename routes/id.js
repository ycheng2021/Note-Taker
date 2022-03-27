const id = require('express').Router();

id.get('/notes/:id', (req, res) =>  {  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    console.log(data)
});

module.exports = id;